// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
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
import React from "react";
import { connect } from "react-redux";
import { DialogContentText } from "@mui/material";
import { setErrorSnackMessage } from "../../../actions";
import { ErrorResponseHandler } from "../../../common/types";
import useApi from "../../../screens/Console/Common/Hooks/useApi";
import ConfirmDialog from "../../../screens/Console/Common/ModalWrapper/ConfirmDialog";
import { ConfirmDeleteIcon } from "../../../icons";
interface IDeleteMultiSAsProps {
  closeDeleteModalAndRefresh: (refresh: boolean) => void;
  deleteOpen: boolean;
  selectedSAs: string[];
  setErrorSnackMessage: typeof setErrorSnackMessage;
}
const DeleteMultipleSAs = ({
  closeDeleteModalAndRefresh,
  deleteOpen,
  selectedSAs,
  setErrorSnackMessage,
}: IDeleteMultiSAsProps) => {
  const onDelSuccess = () => closeDeleteModalAndRefresh(true);
  const onDelError = (err: ErrorResponseHandler) => setErrorSnackMessage(err);
  const onClose = () => closeDeleteModalAndRefresh(false);
  const [deleteLoading, invokeDeleteApi] = useApi(onDelSuccess, onDelError);
  if (!selectedSAs) {
    return null;
  }
  const onConfirmDelete = () => {
    invokeDeleteApi(
      "DELETE",
      `/api/v1/service-accounts/delete-multi`,
      selectedSAs
    );
  };
  return (
    <ConfirmDialog
      title={`Delete Service Accounts`}
      confirmText={"Delete"}
      isOpen={deleteOpen}
      titleIcon={<ConfirmDeleteIcon />}
      isLoading={deleteLoading}
      onConfirm={onConfirmDelete}
      onClose={onClose}
      confirmationContent={
        <DialogContentText>
          Are you sure you want to delete the selected {selectedSAs.length}{" "}
          service accounts?{" "}
        </DialogContentText>
      }
    />
  );
};
const mapDispatchToProps = {
  setErrorSnackMessage,
};
const connector = connect(null, mapDispatchToProps);

export default connector(DeleteMultipleSAs);
