// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { ITenant } from "../ListTenants/types";
import { ICertificateInfo, ITenantSecurityResponse } from "../types";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import {
  containerForHeader,
  spacingUtils,
  tenantDetailsStyles,
} from "../../Common/FormComponents/common/styleLibrary";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import Moment from "react-moment";
import FormSwitchWrapper from "../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import {
  Button,
  CircularProgress,
  DialogContentText,
  Typography,
} from "@mui/material";
import { KeyPair } from "../ListTenants/utils";
import FileSelector from "../../Common/FormComponents/FileSelector/FileSelector";
import api from "../../../../common/api";
import { setErrorSnackMessage } from "../../../../actions";
import { connect } from "react-redux";
import { AppState } from "../../../../store";
import { ErrorResponseHandler } from "../../../../common/types";
import { setTenantDetailsLoad } from "../actions";
import ConfirmDialog from "../../Common/ModalWrapper/ConfirmDialog";
import { AddIcon, ConfirmModalIcon } from "../../../../icons";

interface ITenantSecurity {
  classes: any;
  loadingTenant: boolean;
  tenant: ITenant | null;
  setErrorSnackMessage: typeof setErrorSnackMessage;
  setTenantDetailsLoad: typeof setTenantDetailsLoad;
}

const styles = (theme: Theme) =>
  createStyles({
    ...tenantDetailsStyles,
    ...spacingUtils,
    loaderAlign: {
      textAlign: "center",
    },
    title: {
      marginTop: 35,
    },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    paperContainer: {
      padding: "15px 15px 15px 50px",
    },
    certificateInfo: {
      height: "auto",
      margin: 5,
    },
    fileItem: {
      marginRight: 10,
      display: "flex",
      "& div label": {
        minWidth: 50,
      },

      "@media (max-width: 900px)": {
        flexFlow: "column",
      },
    },
    certInputRow: {
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #eaeaea",
      marginBottom: 10,
    },
    caCertsRow: {
      borderBottom: "1px solid #eaeaea",
      display: "flex",
      alignItems: "center",
      marginBottom: 10,
    },
    ...containerForHeader(theme.spacing(4)),
  });

const TenantSecurity = ({
  classes,
  tenant,
  loadingTenant,
  setErrorSnackMessage,
  setTenantDetailsLoad,
}: ITenantSecurity) => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [enableAutoCert, setEnableAutoCert] = useState<boolean>(false);
  const [enableCustomCerts, setEnableCustomCerts] = useState<boolean>(false);
  const [certificatesToBeRemoved, setCertificatesToBeRemoved] = useState<
    string[]
  >([]);
  // MinIO certificates
  const [minioCertificates, setMinioCertificates] = useState<KeyPair[]>([]);
  const [minioCaCertificates, setMinioCaCertificates] = useState<KeyPair[]>([]);
  const [minioTLSCertificateSecrets, setMinioTLSCertificateSecrets] = useState<
    ICertificateInfo[]
  >([]);
  const [minioTLSCaCertificateSecrets, setMinioTLSCaCertificateSecrets] =
    useState<ICertificateInfo[]>([]);

  const getTenantSecurityInfo = useCallback(() => {
    api
      .invoke(
        "GET",
        `/api/v1/namespaces/${tenant?.namespace}/tenants/${tenant?.name}/security`
      )
      .then((res: ITenantSecurityResponse) => {
        setEnableAutoCert(res.autoCert);
        if (res.customCertificates.minio || res.customCertificates.minioCAs) {
          setEnableCustomCerts(true);
        }
        setMinioTLSCertificateSecrets(res.customCertificates.minio || []);
        setMinioTLSCaCertificateSecrets(res.customCertificates.minioCAs || []);
      })
      .catch((err: ErrorResponseHandler) => {
        setErrorSnackMessage(err);
      });
  }, [tenant, setErrorSnackMessage]);

  useEffect(() => {
    if (tenant) {
      getTenantSecurityInfo();
    }
  }, [tenant, getTenantSecurityInfo]);

  const updateTenantSecurity = () => {
    setIsSending(true);
    let payload = {
      autoCert: enableAutoCert,
      customCertificates: {},
    };
    if (enableCustomCerts) {
      payload["customCertificates"] = {
        secretsToBeDeleted: certificatesToBeRemoved,
        minio: minioCertificates
          .map((keyPair: KeyPair) => ({
            crt: keyPair.encoded_cert,
            key: keyPair.encoded_key,
          }))
          .filter((cert: any) => cert.crt && cert.key),
        minioCAs: minioCaCertificates
          .map((keyPair: KeyPair) => keyPair.encoded_cert)
          .filter((cert: any) => cert),
      };
    } else {
      payload["customCertificates"] = {
        secretsToBeDeleted: [
          ...minioTLSCertificateSecrets.map((cert) => cert.name),
          ...minioTLSCaCertificateSecrets.map((cert) => cert.name),
        ],
        minio: [],
        minioCAs: [],
      };
    }
    api
      .invoke(
        "POST",
        `/api/v1/namespaces/${tenant?.namespace}/tenants/${tenant?.name}/security`,
        payload
      )
      .then(() => {
        setIsSending(false);
        // Close confirmation modal
        setDialogOpen(false);
        // Refresh Information and reset forms
        setMinioCertificates([
          {
            cert: "",
            encoded_cert: "",
            encoded_key: "",
            id: Date.now().toString(),
            key: "",
          },
        ]);
        setMinioCaCertificates([
          {
            cert: "",
            encoded_cert: "",
            encoded_key: "",
            id: Date.now().toString(),
            key: "",
          },
        ]);
        getTenantSecurityInfo();
      })
      .catch((err: ErrorResponseHandler) => {
        setErrorSnackMessage(err);
        setIsSending(false);
      });
  };

  const removeCertificate = (certificateInfo: ICertificateInfo) => {
    // TLS certificate secrets can be referenced MinIO, Console or KES, we need to remove the secret from all list and update
    // the arrays
    // Add certificate to the global list of secrets to be removed
    setCertificatesToBeRemoved([
      ...certificatesToBeRemoved,
      certificateInfo.name,
    ]);

    // Update MinIO TLS certificate secrets
    const updatedMinIOTLSCertificateSecrets = minioTLSCertificateSecrets.filter(
      (certificateSecret) => certificateSecret.name !== certificateInfo.name
    );
    const updatedMinIOTLSCaCertificateSecrets =
      minioTLSCaCertificateSecrets.filter(
        (certificateSecret) => certificateSecret.name !== certificateInfo.name
      );
    setMinioTLSCertificateSecrets(updatedMinIOTLSCertificateSecrets);
    setMinioTLSCaCertificateSecrets(updatedMinIOTLSCaCertificateSecrets);
  };

  const addFileToKeyPair = (
    type: string,
    id: string,
    key: string,
    fileName: string,
    value: string
  ) => {
    let certificates = minioCertificates;
    let updateCertificates: any = () => {};

    switch (type) {
      case "minio": {
        certificates = minioCertificates;
        updateCertificates = setMinioCertificates;
        break;
      }
      case "minioCAs": {
        certificates = minioCaCertificates;
        updateCertificates = setMinioCaCertificates;
        break;
      }
      default:
    }

    const NCertList = certificates.map((item: KeyPair) => {
      if (item.id === id) {
        return {
          ...item,
          [key]: fileName,
          [`encoded_${key}`]: value,
        };
      }
      return item;
    });
    updateCertificates(NCertList);
  };

  const deleteKeyPair = (type: string, id: string) => {
    let certificates = minioCertificates;
    let updateCertificates: any = () => {};

    switch (type) {
      case "minio": {
        certificates = minioCertificates;
        updateCertificates = setMinioCertificates;
        break;
      }
      case "minioCAs": {
        certificates = minioCaCertificates;
        updateCertificates = setMinioCaCertificates;
        break;
      }
      default:
    }

    if (certificates.length > 1) {
      const cleanCertsList = certificates.filter(
        (item: KeyPair) => item.id !== id
      );
      updateCertificates(cleanCertsList);
    }
  };

  const addKeyPair = (type: string) => {
    let certificates = minioCertificates;
    let updateCertificates: any = () => {};

    switch (type) {
      case "minio": {
        certificates = minioCertificates;
        updateCertificates = setMinioCertificates;
        break;
      }
      case "minioCAs": {
        certificates = minioCaCertificates;
        updateCertificates = setMinioCaCertificates;
        break;
      }
      default:
    }
    const updatedCertificates = [
      ...certificates,
      {
        id: Date.now().toString(),
        key: "",
        cert: "",
        encoded_key: "",
        encoded_cert: "",
      },
    ];
    updateCertificates(updatedCertificates);
  };
  return (
    <React.Fragment>
      <ConfirmDialog
        title={"Save and Restart"}
        confirmText={"Restart"}
        cancelText="Cancel"
        titleIcon={<ConfirmModalIcon />}
        isLoading={isSending}
        onClose={() => setDialogOpen(false)}
        isOpen={dialogOpen}
        onConfirm={updateTenantSecurity}
        confirmationContent={
          <DialogContentText>
            Are you sure you want to save the changes and restart the service?
          </DialogContentText>
        }
      />
      {loadingTenant ? (
        <Paper className={classes.paperContainer}>
          <div className={classes.loaderAlign}>
            <CircularProgress />
          </div>
        </Paper>
      ) : (
        <Fragment>
          <h1 className={classes.sectionTitle}>Security</h1>
          <Paper className={classes.paperContainer}>
            <Grid item xs={12} className={classes.title}>
              <FormSwitchWrapper
                value="enableAutoCert"
                id="enableAutoCert"
                name="enableAutoCert"
                checked={enableAutoCert}
                onChange={(e) => {
                  const targetD = e.target;
                  const checked = targetD.checked;
                  setEnableAutoCert(checked);
                }}
                label={"TLS"}
                description={
                  "The internode certificates will be generated and managed by MinIO Operator"
                }
              />
              <FormSwitchWrapper
                value="enableCustomCerts"
                id="enableCustomCerts"
                name="enableCustomCerts"
                checked={enableCustomCerts}
                onChange={(e) => {
                  const targetD = e.target;
                  const checked = targetD.checked;
                  setEnableCustomCerts(checked);
                }}
                label={"Custom Certificates"}
              />
            </Grid>

            {enableCustomCerts && (
              <Grid container>
                <Grid container item xs={12}>
                  <h4>MinIO Certificates</h4>
                </Grid>
                <Grid container item xs={12}>
                  {minioTLSCertificateSecrets.map(
                    (certificateInfo: ICertificateInfo) => (
                      <Chip
                        key={certificateInfo.name}
                        variant="outlined"
                        color="primary"
                        className={classes.certificateInfo}
                        label={
                          <div>
                            <Typography
                              variant="subtitle1"
                              display="block"
                              gutterBottom
                            >
                              {certificateInfo.name}
                            </Typography>
                            <Typography
                              className={classes.italic}
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              {certificateInfo.domains &&
                                certificateInfo.domains.map((dom) => {
                                  return <div>{dom}</div>;
                                })}
                            </Typography>
                            <Typography
                              className={classes.bold}
                              variant="overline"
                              gutterBottom
                            >
                              Expiry:&nbsp;
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                              <Moment format="YYYY-MM-DD">
                                {certificateInfo.expiry}
                              </Moment>
                            </Typography>
                          </div>
                        }
                        onDelete={() => removeCertificate(certificateInfo)}
                      />
                    )
                  )}
                </Grid>

                <Grid container item xs={12}>
                  {minioCertificates.map((keyPair) => (
                    <Grid
                      item
                      xs={12}
                      key={keyPair.id}
                      className={classes.certInputRow}
                    >
                      <Grid item xs={9} className={classes.fileItem}>
                        <Grid item xs={6}>
                          <FileSelector
                            onChange={(encodedValue, fileName) =>
                              addFileToKeyPair(
                                "minio",
                                keyPair.id,
                                "cert",
                                fileName,
                                encodedValue
                              )
                            }
                            accept=".cer,.crt,.cert,.pem"
                            id="tlsCert"
                            name="tlsCert"
                            label="Cert"
                            value={keyPair.cert}
                          />
                        </Grid>
                        <Grid item xs={6} className={classes.spacerLeft}>
                          <FileSelector
                            onChange={(encodedValue, fileName) =>
                              addFileToKeyPair(
                                "minio",
                                keyPair.id,
                                "key",
                                fileName,
                                encodedValue
                              )
                            }
                            accept=".key,.pem"
                            id="tlsKey"
                            name="tlsKey"
                            label="Key"
                            value={keyPair.key}
                          />
                        </Grid>
                      </Grid>
                      <Grid item md={2} xs={1}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => deleteKeyPair("minio", keyPair.id)}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <Grid container item xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<AddIcon />}
                    onClick={() => addKeyPair("minio")}
                  >
                    Add Certificate
                  </Button>
                </Grid>

                <Grid container item xs={12}>
                  <h4>MinIO CA Certificates</h4>
                </Grid>
                <Grid container item xs={12}>
                  {minioTLSCaCertificateSecrets.map(
                    (certificateInfo: ICertificateInfo) => (
                      <Chip
                        key={certificateInfo.name}
                        variant="outlined"
                        color="primary"
                        className={classes.certificateInfo}
                        label={
                          <div>
                            <Typography
                              variant="subtitle1"
                              display="block"
                              gutterBottom
                            >
                              {certificateInfo.name}
                            </Typography>
                            <Typography
                              className={classes.italic}
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              {certificateInfo.domains &&
                                certificateInfo.domains.map((dom) => {
                                  return <div>{dom}</div>;
                                })}
                            </Typography>
                            <Typography
                              className={classes.bold}
                              variant="overline"
                              gutterBottom
                            >
                              Expiry:&nbsp;
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                              <Moment format="YYYY-MM-DD">
                                {certificateInfo.expiry}
                              </Moment>
                            </Typography>
                          </div>
                        }
                        onDelete={() => removeCertificate(certificateInfo)}
                      />
                    )
                  )}
                </Grid>

                <Grid container item xs={12}>
                  {minioCaCertificates.map((keyPair: KeyPair) => (
                    <Grid
                      item
                      xs={12}
                      className={classes.caCertsRow}
                      key={keyPair.id}
                    >
                      <Grid item xs={9} className={classes.fileItem}>
                        <FileSelector
                          onChange={(encodedValue, fileName) =>
                            addFileToKeyPair(
                              "minioCAs",
                              keyPair.id,
                              "cert",
                              fileName,
                              encodedValue
                            )
                          }
                          accept=".cer,.crt,.cert,.pem"
                          id="tlsCert"
                          name="tlsCert"
                          label="Cert"
                          value={keyPair.cert}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => deleteKeyPair("minioCAs", keyPair.id)}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <Grid container item xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<AddIcon />}
                    onClick={() => addKeyPair("minioCAs")}
                  >
                    Add CA Certificate
                  </Button>
                </Grid>
              </Grid>
            )}

            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={dialogOpen || isSending}
                onClick={() => setDialogOpen(true)}
              >
                Save
              </Button>
            </Grid>
          </Paper>
        </Fragment>
      )}
    </React.Fragment>
  );
};

const mapState = (state: AppState) => ({
  loadingTenant: state.tenants.tenantDetails.loadingTenant,
  selectedTenant: state.tenants.tenantDetails.currentTenant,
  tenant: state.tenants.tenantDetails.tenantInfo,
});

const mapDispatchToProps = {
  setErrorSnackMessage,
  setTenantDetailsLoad,
};

const connector = connect(mapState, mapDispatchToProps);

export default withStyles(styles)(connector(TenantSecurity));
