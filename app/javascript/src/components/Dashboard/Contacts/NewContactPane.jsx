import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Pane, Button, Toastr } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";

import NewNoteForm from "./NewContactForm";

const NewNotePane = ({ showPane, onClose }) => {
  const handleSubmit = () => {
    //handle form submit
    onClose();
    Toastr.success("Contact added successfully");
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2">Add New Note</Typography>
      </Pane.Header>
      <Pane.Body>
        <NewNoteForm handleSubmit={handleSubmit} />
      </Pane.Body>
      <Pane.Footer className="flex space-x-4">
        <Button
          label="Save Changes"
          type="submit"
          icon={() => <Check size={18} className="ml-2" />}
          onClick={() => handleSubmit()}
          className="p-2"
        />
        <Button style="text" label="Cancel" onClick={onClose} />
      </Pane.Footer>
    </Pane>
  );
};

export default NewNotePane;
