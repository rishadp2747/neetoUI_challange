import React from "react";

import { Modal } from "@bigbinary/neetoui/v2";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

const DeleteAlert = ({ showModal, onClose, title }) => {
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
        <Button label="Continue" onClick={onClose} size="large" />
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
