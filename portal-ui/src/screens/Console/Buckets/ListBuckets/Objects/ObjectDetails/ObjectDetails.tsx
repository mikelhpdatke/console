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
import * as reactMoment from "react-moment";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import ShareFile from "./ShareFile";
import {
  actionsTray,
  buttonsStyles,
  containerForHeader,
  hrClass,
  tableStyles,
  spacingUtils,
  textStyleUtils,
} from "../../../../Common/FormComponents/common/styleLibrary";
import { IFileInfo } from "./types";
import { download, extensionPreview } from "../utils";
import history from "../../../../../../history";
import api from "../../../../../../common/api";

import TableWrapper, {
  ItemActions,
} from "../../../../Common/TableWrapper/TableWrapper";
import { ErrorResponseHandler } from "../../../../../../common/types";
import {
  setErrorSnackMessage,
  setSnackBarMessage,
} from "../../../../../../actions";
import { decodeFileName, encodeFileName } from "../../../../../../common/utils";
import { IAM_SCOPES } from "../../../../../../common/SecureComponent/permissions";
import SetRetention from "./SetRetention";
import BrowserBreadcrumbs from "../../../../ObjectBrowser/BrowserBreadcrumbs";
import DeleteObject from "../ListObjects/DeleteObject";
import AddTagModal from "./AddTagModal";
import DeleteTagModal from "./DeleteTagModal";
import SetLegalHoldModal from "./SetLegalHoldModal";
import ScreenTitle from "../../../../Common/ScreenTitle/ScreenTitle";

import PreviewFileContent from "../Preview/PreviewFileContent";
import RestoreFileVersion from "./RestoreFileVersion";
import PageLayout from "../../../../Common/Layout/PageLayout";
import VerticalTabs from "../../../../Common/VerticalTabs/VerticalTabs";
import { SecureComponent } from "../../../../../../common/SecureComponent";
import {
  completeObject,
  setNewObject,
  updateProgress,
} from "../../../../ObjectBrowser/actions";
import RBIconButton from "../../../BucketDetails/SummaryItems/RBIconButton";
import SearchBox from "../../../../Common/SearchBox";
import ObjectTags from "./ObjectTags";
import { AppState } from "../../../../../../store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { DisabledIcon } from "../../../../../../icons";
import LabelWithIcon from "../../../BucketDetails/SummaryItems/LabelWithIcon";

const RecoverIcon = React.lazy(
  () => import("../../../../../../icons/RecoverIcon")
);
const ShareIcon = React.lazy(() => import("../../../../../../icons/ShareIcon"));
const DownloadIcon = React.lazy(
  () => import("../../../../../../icons/DownloadIcon")
);
const DeleteIcon = React.lazy(
  () => import("../../../../../../icons/DeleteIcon")
);

const ObjectBrowserIcon = React.lazy(
  () => import("../../../../../../icons/ObjectBrowserIcon")
);
const ObjectMetaData = React.lazy(() => import("./ObjectMetaData"));
const EditablePropertyItem = React.lazy(
  () => import("../../../BucketDetails/SummaryItems/EditablePropertyItem")
);
const LabelValuePair = React.lazy(
  () => import("../../../../Common/UsageBarWrapper/LabelValuePair")
);

const styles = (theme: Theme) =>
  createStyles({
    propertiesIcon: {
      marginLeft: 5,
      "& .min-icon": {
        height: 12,
      },
    },
    tag: {
      marginRight: 6,
      fontSize: 10,
      fontWeight: 700,
      "&.MuiChip-sizeSmall": {
        height: 18,
      },
      "& .min-icon": {
        height: 10,
        width: 10,
      },
    },
    search: {
      marginBottom: 8,
      "&.MuiFormControl-root": {
        marginRight: 0,
      },
    },
    capitalizeFirst: {
      textTransform: "capitalize",
      "& .min-icon": {
        width: 16,
        height: 16,
      },
    },
    titleCol: {
      width: "25%",
    },
    titleItem: {
      width: "35%",
    },

    "@global": {
      ".progressDetails": {
        paddingTop: 3,
        display: "inline-block",
        position: "relative",
        width: 18,
        height: 18,
      },
      ".progressDetails > .MuiCircularProgress-root": {
        position: "absolute",
        left: 0,
        top: 3,
      },
    },
    tabsContainer: {
      border: "1px solid #eaeaea",
      borderTop: 0,
    },
    ...hrClass,
    ...buttonsStyles,
    ...actionsTray,
    ...tableStyles,
    ...spacingUtils,
    ...textStyleUtils,
    ...containerForHeader(theme.spacing(4)),
  });

interface IObjectDetailsProps {
  classes: any;
  downloadingFiles: string[];
  rewindEnabled: boolean;
  rewindDate: any;
  match: any;
  bucketToRewind: string;
  distributedSetup: boolean;
  setErrorSnackMessage: typeof setErrorSnackMessage;
  setSnackBarMessage: typeof setSnackBarMessage;
  setNewObject: typeof setNewObject;
  updateProgress: typeof updateProgress;
  completeObject: typeof completeObject;
}

const emptyFile: IFileInfo = {
  is_latest: true,
  last_modified: "",
  legal_hold_status: "",
  name: "",
  retention_mode: "",
  retention_until_date: "",
  size: "0",
  tags: {},
  version_id: null,
};

const twoColCssGridLayoutConfig = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "2fr 1fr" },
  gridAutoFlow: { xs: "dense", sm: "row" },
  gap: 2,
};
const ObjectDetails = ({
  classes,
  downloadingFiles,
  distributedSetup,
  setErrorSnackMessage,
  setNewObject,
  updateProgress,
  completeObject,
  match,
}: IObjectDetailsProps) => {
  const [loadObjectData, setLoadObjectData] = useState<boolean>(true);
  const [shareFileModalOpen, setShareFileModalOpen] = useState<boolean>(false);
  const [retentionModalOpen, setRetentionModalOpen] = useState<boolean>(false);
  const [tagModalOpen, setTagModalOpen] = useState<boolean>(false);
  const [deleteTagModalOpen, setDeleteTagModalOpen] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string[]>(["", ""]);
  const [legalholdOpen, setLegalholdOpen] = useState<boolean>(false);
  const [actualInfo, setActualInfo] = useState<IFileInfo | null>(null);
  const [objectToShare, setObjectToShare] = useState<IFileInfo | null>(null);
  const [versions, setVersions] = useState<IFileInfo[]>([]);
  const [filterVersion, setFilterVersion] = useState<string>("");
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [restoreVersionOpen, setRestoreVersionOpen] = useState<boolean>(false);
  const [restoreVersion, setRestoreVersion] = useState<string>("");

  const internalPaths = get(match.params, "subpaths", "");
  const internalPathsDecoded = decodeFileName(internalPaths) || "";
  const bucketName = match.params["bucketName"];
  const allPathData = internalPathsDecoded.split("/");
  const currentItem = allPathData.pop() || "";

  // calculate object name to display
  let objectNameArray: string[] = [];
  if (actualInfo) {
    objectNameArray = actualInfo.name.split("/");
  }

  useEffect(() => {
    if (loadObjectData && internalPaths !== "") {
      api
        .invoke(
          "GET",
          `/api/v1/buckets/${bucketName}/objects?prefix=${internalPaths}${
            distributedSetup ? "&with_versions=true" : ""
          }`
        )
        .then((res: IFileInfo[]) => {
          const result = get(res, "objects", []);
          if (distributedSetup) {
            setActualInfo(
              result.find((el: IFileInfo) => el.is_latest) || emptyFile
            );
            setVersions(result);
          } else {
            setActualInfo(result[0]);
            setVersions([]);
          }

          setLoadObjectData(false);
        })
        .catch((error: ErrorResponseHandler) => {
          setErrorSnackMessage(error);
          setLoadObjectData(false);
        });
    }
  }, [
    loadObjectData,
    bucketName,
    internalPaths,
    setErrorSnackMessage,
    distributedSetup,
  ]);

  let tagKeys: string[] = [];

  if (actualInfo && actualInfo.tags) {
    tagKeys = Object.keys(actualInfo.tags);
  }

  const openRetentionModal = () => {
    setRetentionModalOpen(true);
  };

  const closeRetentionModal = (updateInfo: boolean) => {
    setRetentionModalOpen(false);
    if (updateInfo) {
      setLoadObjectData(true);
    }
  };

  const shareObject = () => {
    setShareFileModalOpen(true);
  };

  const closeShareModal = () => {
    setObjectToShare(null);
    setShareFileModalOpen(false);
  };

  const deleteTag = (tagKey: string, tagLabel: string) => {
    setSelectedTag([tagKey, tagLabel]);
    setDeleteTagModalOpen(true);
  };

  const downloadObject = (object: IFileInfo) => {
    const identityDownload = encodeFileName(
      `${bucketName}-${object.name}-${new Date().getTime()}-${Math.random()}`
    );

    setNewObject({
      bucketName,
      done: false,
      instanceID: identityDownload,
      percentage: 0,
      prefix: object.name,
      type: "download",
      waitingForFile: true,
    });

    download(
      bucketName,
      internalPaths,
      object.version_id,
      parseInt(object.size || "0"),
      (progress) => {
        updateProgress(identityDownload, progress);
      },
      () => {
        completeObject(identityDownload);
      }
    );
  };

  const tableActions: ItemActions[] = [
    {
      label: "Share",
      type: "share",
      onClick: (item: any) => {
        setObjectToShare(item);
        shareObject();
      },
      sendOnlyId: false,
      disableButtonFunction: (item: string) => {
        const element = versions.find((elm) => elm.version_id === item);
        if (element && element.is_delete_marker) {
          return true;
        }
        return false;
      },
    },
    {
      label: "Download",
      type: "download",
      onClick: (item: IFileInfo) => {
        downloadObject(item);
      },
      disableButtonFunction: (item: string) => {
        const element = versions.find((elm) => elm.version_id === item);
        if (element && element.is_delete_marker) {
          return true;
        }
        return false;
      },
    },
    {
      label: "Restore",
      type: <RecoverIcon />,
      onClick: (item: IFileInfo) => {
        setRestoreVersion(item.version_id || "");
        setRestoreVersionOpen(true);
      },
      disableButtonFunction: (item: string) => {
        const element = versions.find((elm) => elm.version_id === item);
        return (element && element.is_delete_marker) || false;
      },
    },
  ];

  const filteredRecords = versions.filter((version) => {
    if (version.version_id) {
      return version.version_id.includes(filterVersion);
    }
    return false;
  });

  const displayParsedDate = (date: string) => {
    return <reactMoment.default>{date}</reactMoment.default>;
  };

  const closeDeleteModal = (redirectBack: boolean) => {
    setDeleteOpen(false);

    if (redirectBack) {
      const newPath = allPathData.join("/");
      history.push(
        `/buckets/${bucketName}/browse${
          newPath === "" ? "" : `/${encodeFileName(newPath)}`
        }`
      );
    }
  };

  const closeAddTagModal = (reloadObjectData: boolean) => {
    setTagModalOpen(false);
    if (reloadObjectData) {
      setLoadObjectData(true);
    }
  };

  const closeLegalholdModal = (reload: boolean) => {
    setLegalholdOpen(false);
    if (reload) {
      setLoadObjectData(true);
    }
  };

  const closeDeleteTagModal = (reloadObjectData: boolean) => {
    setDeleteTagModalOpen(false);
    if (reloadObjectData) {
      setLoadObjectData(true);
    }
  };

  const closeRestoreModal = (reloadObjectData: boolean) => {
    setRestoreVersionOpen(false);
    setRestoreVersion("");

    if (reloadObjectData) {
      setLoadObjectData(true);
    }
  };

  return (
    <React.Fragment>
      {shareFileModalOpen && actualInfo && (
        <ShareFile
          open={shareFileModalOpen}
          closeModalAndRefresh={closeShareModal}
          bucketName={bucketName}
          dataObject={objectToShare || actualInfo}
        />
      )}
      {retentionModalOpen && actualInfo && (
        <SetRetention
          open={retentionModalOpen}
          closeModalAndRefresh={closeRetentionModal}
          objectName={currentItem}
          objectInfo={actualInfo}
          bucketName={bucketName}
        />
      )}
      {deleteOpen && (
        <DeleteObject
          deleteOpen={deleteOpen}
          selectedBucket={bucketName}
          selectedObject={internalPaths}
          closeDeleteModalAndRefresh={closeDeleteModal}
          versioning={distributedSetup}
        />
      )}
      {tagModalOpen && actualInfo && (
        <AddTagModal
          modalOpen={tagModalOpen}
          currentTags={actualInfo.tags}
          selectedObject={internalPaths}
          versionId={actualInfo.version_id}
          bucketName={bucketName}
          onCloseAndUpdate={closeAddTagModal}
        />
      )}
      {deleteTagModalOpen && actualInfo && (
        <DeleteTagModal
          deleteOpen={deleteTagModalOpen}
          currentTags={actualInfo.tags}
          selectedObject={actualInfo.name}
          versionId={actualInfo.version_id}
          bucketName={bucketName}
          onCloseAndUpdate={closeDeleteTagModal}
          selectedTag={selectedTag}
        />
      )}
      {legalholdOpen && actualInfo && (
        <SetLegalHoldModal
          open={legalholdOpen}
          closeModalAndRefresh={closeLegalholdModal}
          objectName={actualInfo.name}
          bucketName={bucketName}
          actualInfo={actualInfo}
        />
      )}
      {restoreVersionOpen && actualInfo && (
        <RestoreFileVersion
          restoreOpen={restoreVersionOpen}
          bucketName={bucketName}
          versionID={restoreVersion}
          objectPath={actualInfo.name}
          onCloseAndUpdate={closeRestoreModal}
        />
      )}

      <PageLayout className={classes.pageContainer}>
        {!actualInfo && (
          <Grid item xs={12}>
            <LinearProgress />
          </Grid>
        )}

        {actualInfo && (
          <Fragment>
            <Grid item xs={12}>
              <ScreenTitle
                icon={
                  <Fragment>
                    <ObjectBrowserIcon width={40} />
                  </Fragment>
                }
                title={
                  objectNameArray.length > 0
                    ? objectNameArray[objectNameArray.length - 1]
                    : actualInfo.name
                }
                subTitle={
                  <Fragment>
                    <BrowserBreadcrumbs
                      bucketName={bucketName}
                      internalPaths={actualInfo.name}
                    />
                  </Fragment>
                }
                actions={
                  <Fragment>
                    <SecureComponent
                      scopes={[IAM_SCOPES.S3_DELETE_OBJECT]}
                      resource={bucketName}
                      matchAll
                      errorProps={{ disabled: true }}
                    >
                      <RBIconButton
                        tooltip={"Delete Object"}
                        onClick={() => {
                          setDeleteOpen(true);
                        }}
                        text={""}
                        icon={<DeleteIcon />}
                        color="secondary"
                        disabled={actualInfo.is_delete_marker}
                        variant={"outlined"}
                      />
                    </SecureComponent>

                    <RBIconButton
                      tooltip={"Share"}
                      onClick={() => {
                        shareObject();
                      }}
                      text={""}
                      icon={<ShareIcon />}
                      color="primary"
                      disabled={actualInfo.is_delete_marker}
                      variant={"outlined"}
                    />

                    {downloadingFiles.includes(
                      `${bucketName}/${actualInfo.name}`
                    ) ? (
                      <div className="progressDetails">
                        <CircularProgress
                          color="primary"
                          size={17}
                          variant="indeterminate"
                        />
                      </div>
                    ) : (
                      <RBIconButton
                        tooltip={"Download"}
                        text={""}
                        icon={<DownloadIcon />}
                        color="primary"
                        onClick={() => {
                          downloadObject(actualInfo);
                        }}
                        disabled={actualInfo.is_delete_marker}
                        variant={"outlined"}
                      />
                    )}
                  </Fragment>
                }
              />
            </Grid>
            <VerticalTabs
              classes={{
                tabsContainer: classes.tabsContainer,
              }}
            >
              {{
                tabConfig: {
                  label: "Details",
                },
                content: (
                  <React.Fragment>
                    <div className={classes.actionsTray}>
                      <h1 className={classes.sectionTitle}>Details</h1>
                    </div>
                    <br />

                    <Box sx={{ ...twoColCssGridLayoutConfig }}>
                      <Box sx={{ ...twoColCssGridLayoutConfig }}>
                        <SecureComponent
                          scopes={[IAM_SCOPES.S3_GET_OBJECT_LEGAL_HOLD]}
                          resource={bucketName}
                        >
                          <LabelValuePair
                            label={""}
                            value={
                              actualInfo.version_id &&
                              actualInfo.version_id !== "null" ? (
                                <EditablePropertyItem
                                  iamScopes={[
                                    IAM_SCOPES.S3_PUT_OBJECT_LEGAL_HOLD,
                                  ]}
                                  secureCmpProps={{
                                    matchAll: false,
                                    errorProps: {
                                      disabled: true,
                                      onClick: null,
                                    },
                                  }}
                                  resourceName={bucketName}
                                  property={"Legal Hold:"}
                                  value={
                                    actualInfo.legal_hold_status
                                      ? actualInfo.legal_hold_status.toLowerCase()
                                      : "Off"
                                  }
                                  onEdit={() => {
                                    setLegalholdOpen(true);
                                  }}
                                  isLoading={false}
                                />
                              ) : (
                                <LabelValuePair
                                  label={"Legal Hold:"}
                                  value={
                                    <LabelWithIcon
                                      icon={<DisabledIcon />}
                                      label={
                                        <label className={classes.textMuted}>
                                          Disabled
                                        </label>
                                      }
                                    />
                                  }
                                />
                              )
                            }
                          />
                        </SecureComponent>

                        <SecureComponent
                          scopes={[IAM_SCOPES.S3_GET_OBJECT_RETENTION]}
                          resource={bucketName}
                        >
                          <LabelValuePair
                            label={""}
                            value={
                              actualInfo.version_id &&
                              actualInfo.version_id !== "null" ? (
                                <EditablePropertyItem
                                  iamScopes={[
                                    IAM_SCOPES.S3_PUT_OBJECT_RETENTION,
                                  ]}
                                  secureCmpProps={{
                                    matchAll: false,
                                  }}
                                  resourceName={bucketName}
                                  property={"Retention:"}
                                  value={
                                    actualInfo.retention_mode
                                      ? actualInfo.retention_mode.toLowerCase()
                                      : "None"
                                  }
                                  onEdit={openRetentionModal}
                                  isLoading={false}
                                />
                              ) : (
                                <LabelValuePair
                                  label={"Retention:"}
                                  value={
                                    <LabelWithIcon
                                      icon={<DisabledIcon />}
                                      label={
                                        <label className={classes.textMuted}>
                                          Disabled
                                        </label>
                                      }
                                    />
                                  }
                                />
                              )
                            }
                          />
                        </SecureComponent>
                      </Box>
                    </Box>

                    <Box className={classes.spacerTop}>
                      <LabelValuePair
                        label={"Tags:"}
                        value={
                          <ObjectTags
                            objectInfo={actualInfo}
                            tagKeys={tagKeys}
                            bucketName={bucketName}
                            onDeleteTag={deleteTag}
                            onAddTagClick={() => {
                              setTagModalOpen(true);
                            }}
                          />
                        }
                      />
                    </Box>

                    {actualInfo ? (
                      <ObjectMetaData
                        bucketName={bucketName}
                        internalPaths={internalPaths}
                        actualInfo={actualInfo}
                      />
                    ) : null}
                  </React.Fragment>
                ),
              }}
              {{
                tabConfig: {
                  label: "Versions",
                  disabled: !(
                    actualInfo.version_id && actualInfo.version_id !== "null"
                  ),
                },
                content: (
                  <Fragment>
                    <div className={classes.actionsTray}>
                      <h1 className={classes.sectionTitle}>Versions</h1>
                    </div>
                    <br />
                    <Grid item xs={12} className={classes.actionsTray}>
                      {actualInfo.version_id &&
                        actualInfo.version_id !== "null" && (
                          <SearchBox
                            placeholder={`Search ${currentItem}`}
                            onChange={setFilterVersion}
                            value={filterVersion}
                          />
                        )}
                    </Grid>
                    <Grid item xs={12} className={classes.tableBlock}>
                      {actualInfo.version_id &&
                        actualInfo.version_id !== "null" && (
                          <TableWrapper
                            itemActions={tableActions}
                            columns={[
                              {
                                label: "",
                                width: 40,
                                renderFullObject: true,
                                renderFunction: (r) => {
                                  const versOrd =
                                    versions.length - versions.indexOf(r);
                                  return `v${versOrd}`;
                                },
                                elementKey: "version_id",
                              },
                              { label: "Version ID", elementKey: "version_id" },
                              {
                                label: "Last Modified",
                                elementKey: "last_modified",
                                renderFunction: displayParsedDate,
                              },
                              {
                                label: "Deleted",
                                width: 60,
                                contentTextAlign: "center",
                                renderFullObject: true,
                                elementKey: "is_delete_marker",
                                renderFunction: (r) => {
                                  const versOrd = r.is_delete_marker
                                    ? "Yes"
                                    : "No";
                                  return `${versOrd}`;
                                },
                              },
                            ]}
                            isLoading={false}
                            entityName="Versions"
                            idField="version_id"
                            records={filteredRecords}
                            textSelectable
                          />
                        )}
                    </Grid>
                  </Fragment>
                ),
              }}
              {{
                tabConfig: {
                  label: "Preview",
                  disabled: extensionPreview(currentItem) === "none",
                },
                content: (
                  <React.Fragment>
                    {actualInfo && (
                      <PreviewFileContent
                        bucketName={bucketName}
                        object={{
                          name: actualInfo.name,
                          version_id: actualInfo.version_id || "null",
                          size: parseInt(actualInfo.size || "0"),
                          content_type: "",
                          last_modified: new Date(actualInfo.last_modified),
                        }}
                        isFullscreen
                      />
                    )}
                  </React.Fragment>
                ),
              }}
            </VerticalTabs>
          </Fragment>
        )}
      </PageLayout>
    </React.Fragment>
  );
};

const mapStateToProps = ({ objectBrowser, system }: AppState) => ({
  downloadingFiles: get(objectBrowser, "downloadingFiles", []),
  rewindEnabled: get(objectBrowser, "rewind.rewindEnabled", false),
  rewindDate: get(objectBrowser, "rewind.dateToRewind", null),
  bucketToRewind: get(objectBrowser, "rewind.bucketToRewind", ""),
  distributedSetup: get(system, "distributedSetup", false),
});

const mapDispatchToProps = {
  setErrorSnackMessage,
  setSnackBarMessage,
  setNewObject,
  updateProgress,
  completeObject,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(withStyles(styles)(ObjectDetails)));
