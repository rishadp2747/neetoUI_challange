import React from "react";

import { Modal } from "@bigbinary/neetoui/v2";
import { Typography, Button, Toastr } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

const DeleteAlert = ({ showModal, onClose, title }) => {
  const DisplayToast = () => {
    onClose();
    Toastr.success(`${title.split(" ")[1]} deleted successfully`);
  };

  return (
    <Modal isOpen={showModal} onClose={onClose} size="md">
      <Modal.Header>
        <Typography style="h2">{title}</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={() => DisplayToast()} size="large" />
        <Button style="text" label="Cancel" onClick={onClose} size="large" />
      </Modal.Footer>
    </Modal>
  );
};

DeleteAlert.propTypes = {
  title: PropTypes.string,
  showModal: PropTypes.bool,
  onClose: PropTypes.func
};

export default DeleteAlert;
