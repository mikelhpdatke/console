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

import React, { Fragment, useEffect, useState } from "react";
import get from "lodash/get";
import { connect } from "react-redux";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { Button, LinearProgress, SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid";
import { setModalErrorSnackMessage } from "../../../../actions";
import {
  ITierElement,
  ITierResponse,
} from "../../Configurations/TiersConfiguration/types";
import { ErrorResponseHandler } from "../../../../common/types";
import InputBoxWrapper from "../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import FormSwitchWrapper from "../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import ModalWrapper from "../../Common/ModalWrapper/ModalWrapper";
import api from "../../../../common/api";
import SelectWrapper from "../../Common/FormComponents/SelectWrapper/SelectWrapper";
import QueryMultiSelector from "../../Common/FormComponents/QueryMultiSelector/QueryMultiSelector";
import RadioGroupSelector from "../../Common/FormComponents/RadioGroupSelector/RadioGroupSelector";
import {
  createTenantCommon,
  formFieldStyles,
  modalStyleUtils,
  spacingUtils,
} from "../../Common/FormComponents/common/styleLibrary";
import { LifecycleConfigIcon } from "../../../../icons";

interface IReplicationModal {
  open: boolean;
  closeModalAndRefresh: (refresh: boolean) => any;
  classes: any;
  bucketName: string;
  setModalErrorSnackMessage: typeof setModalErrorSnackMessage;
}

export interface ITiersDropDown {
  label: string;
  value: string;
}

const styles = (theme: Theme) =>
  createStyles({
    dateSelector: {
      "& div": {
        borderBottom: 0,
        marginBottom: 0,

        "& div:nth-child(2)": {
          border: "1px solid #EAEAEA",
          paddingLeft: 5,

          "& div": {
            border: 0,
          },
        },
      },
    },
    ...spacingUtils,
    ...modalStyleUtils,
    ...formFieldStyles,
    ...createTenantCommon,
  });

const AddLifecycleModal = ({
  open,
  closeModalAndRefresh,
  classes,
  bucketName,
  setModalErrorSnackMessage,
}: IReplicationModal) => {
  const [loadingTiers, setLoadingTiers] = useState<boolean>(true);
  const [tiersList, setTiersList] = useState<ITiersDropDown[]>([]);
  const [addLoading, setAddLoading] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [tags, setTags] = useState<string>("");
  const [storageClass, setStorageClass] = useState("");
  const [NCTransitionSC, setNCTransitionSC] = useState("");
  const [expiredObjectDM, setExpiredObjectDM] = useState<boolean>(false);
  const [NCExpirationDays, setNCExpirationDays] = useState<string>("0");
  const [NCTransitionDays, setNCTransitionDays] = useState<string>("0");
  const [ilmType, setIlmType] = useState<string>("expiry");
  const [expiryDays, setExpiryDays] = useState<string>("0");
  const [transitionDays, setTransitionDays] = useState<string>("0");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (loadingTiers) {
      api
        .invoke("GET", `/api/v1/admin/tiers`)
        .then((res: ITierResponse) => {
          const tiersList: ITierElement[] | null = get(res, "items", []);

          if (tiersList !== null && tiersList.length >= 1) {
            const objList = tiersList.map((tier: ITierElement) => {
              const tierType = tier.type;
              const value = get(tier, `${tierType}.name`, "");

              return { label: value, value: value };
            });

            setTiersList(objList);
            if (objList.length > 0) {
              setStorageClass(objList[0].value);
            }
          }
          setLoadingTiers(false);
        })
        .catch((err: ErrorResponseHandler) => {
          setLoadingTiers(false);
        });
    }
  }, [loadingTiers]);

  useEffect(() => {
    let valid = true;

    if (ilmType !== "expiry") {
      if (storageClass === "") {
        valid = false;
      }
    }
    setIsFormValid(valid);
  }, [ilmType, expiryDays, transitionDays, storageClass]);

  const addRecord = () => {
    let rules = {};

    if (ilmType === "expiry") {
      let expiry = {
        expiry_days: parseInt(expiryDays),
      };

      rules = {
        ...expiry,
        noncurrentversion_expiration_days: parseInt(NCExpirationDays),
      };
    } else {
      let transition = {
        transition_days: parseInt(transitionDays),
      };

      rules = {
        ...transition,
        noncurrentversion_transition_days: parseInt(NCTransitionDays),
        noncurrentversion_transition_storage_class: NCTransitionSC,
        storage_class: storageClass,
      };
    }

    const lifecycleInsert = {
      type: ilmType,
      prefix,
      tags,
      expired_object_delete_marker: expiredObjectDM,
      ...rules,
    };

    api
      .invoke(
        "POST",
        `/api/v1/buckets/${bucketName}/lifecycle`,
        lifecycleInsert
      )
      .then(() => {
        setAddLoading(false);
        closeModalAndRefresh(true);
      })
      .catch((err: ErrorResponseHandler) => {
        setAddLoading(false);
        setModalErrorSnackMessage(err);
      });
  };

  return (
    <ModalWrapper
      modalOpen={open}
      onClose={() => {
        closeModalAndRefresh(false);
      }}
      title="Add Lifecycle Rule"
      titleIcon={<LifecycleConfigIcon />}
    >
      {loadingTiers && (
        <Grid container className={classes.loadingBox}>
          <Grid item xs={12}>
            <LinearProgress />
          </Grid>
        </Grid>
      )}

      {!loadingTiers && (
        <form
          noValidate
          autoComplete="off"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setAddLoading(true);
            addRecord();
          }}
        >
          <Grid container>
            <Grid item xs={12} className={classes.formScrollable}>
              <Grid item xs={12} className={classes.formFieldRow}>
                <fieldset className={classes.fieldGroup}>
                  <legend className={classes.descriptionText}>
                    Lifecycle Configuration
                  </legend>

                  <Grid item xs={12}>
                    <RadioGroupSelector
                      currentSelection={ilmType}
                      id="quota_type"
                      name="quota_type"
                      label="ILM Rule"
                      onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                        setIlmType(e.target.value as string);
                      }}
                      selectorOptions={[
                        { value: "expiry", label: "Expiry" },
                        { value: "transition", label: "Transition" },
                      ]}
                    />
                  </Grid>
                  {ilmType === "expiry" ? (
                    <Fragment>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <InputBoxWrapper
                          type="number"
                          id="expiry_days"
                          name="expiry_days"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setExpiryDays(e.target.value);
                          }}
                          label="Expiry Days"
                          value={expiryDays}
                          min="0"
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <InputBoxWrapper
                          type="number"
                          id="noncurrentversion_expiration_days"
                          name="noncurrentversion_expiration_days"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setNCExpirationDays(e.target.value);
                          }}
                          label="Non-current Expiration Days"
                          value={NCExpirationDays}
                          min="0"
                        />
                      </Grid>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <InputBoxWrapper
                          type="number"
                          id="transition_days"
                          name="transition_days"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setTransitionDays(e.target.value);
                          }}
                          label="Transition Days"
                          value={transitionDays}
                          min="0"
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <InputBoxWrapper
                          type="number"
                          id="noncurrentversion_transition_days"
                          name="noncurrentversion_transition_days"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setNCTransitionDays(e.target.value);
                          }}
                          label="Non-current Transition Days"
                          value={NCTransitionDays}
                          min="0"
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <InputBoxWrapper
                          id="noncurrentversion_t_SC"
                          name="noncurrentversion_t_SC"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setNCTransitionSC(e.target.value);
                          }}
                          placeholder="Set Non-current Version Transition Storage Class"
                          label="Non-current Version Transition Storage Class"
                          value={NCTransitionSC}
                        />
                      </Grid>
                      <Grid item xs={12} className={classes.formFieldRow}>
                        <SelectWrapper
                          label="Storage Class"
                          id="storage_class"
                          name="storage_class"
                          value={storageClass}
                          onChange={(e: SelectChangeEvent<string>) => {
                            setStorageClass(e.target.value as string);
                          }}
                          options={tiersList}
                        />
                      </Grid>
                    </Fragment>
                  )}
                </fieldset>
              </Grid>
              <Grid item xs={12} className={classes.formFieldRow}>
                <fieldset className={classes.fieldGroup}>
                  <legend className={classes.descriptionText}>
                    File Configuration
                  </legend>

                  <Grid item xs={12}>
                    <InputBoxWrapper
                      id="prefix"
                      name="prefix"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPrefix(e.target.value);
                      }}
                      label="Prefix"
                      value={prefix}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <QueryMultiSelector
                      name="tags"
                      label="Tags"
                      elements={""}
                      onChange={(vl: string) => {
                        setTags(vl);
                      }}
                      keyPlaceholder="Tag Key"
                      valuePlaceholder="Tag Value"
                      withBorder
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormSwitchWrapper
                      value="expired_delete_marker"
                      id="expired_delete_marker"
                      name="expired_delete_marker"
                      checked={expiredObjectDM}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setExpiredObjectDM(event.target.checked);
                      }}
                      label={"Expired Object Delete Marker"}
                    />
                  </Grid>
                </fieldset>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalButtonBar}>
              <Button
                type="button"
                variant="outlined"
                color="primary"
                disabled={addLoading}
                onClick={() => {
                  closeModalAndRefresh(false);
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={addLoading || !isFormValid}
              >
                Save
              </Button>
            </Grid>
            {addLoading && (
              <Grid item xs={12}>
                <LinearProgress />
              </Grid>
            )}
          </Grid>
        </form>
      )}
    </ModalWrapper>
  );
};

const connector = connect(null, {
  setModalErrorSnackMessage,
});

export default withStyles(styles)(connector(AddLifecycleModal));
