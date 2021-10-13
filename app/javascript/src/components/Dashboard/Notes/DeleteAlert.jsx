import React from "react";

import { Modal } from "@bigbinary/neetoui/v2";
import { Typography, Button } from "@bigbinary/neetoui/v2";

const DeleteAlert = ({ showModal, onClose }) => {
  return (
    <Modal isOpen={showModal} onClose={onClose} size="md">
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
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

export default DeleteAlert;
