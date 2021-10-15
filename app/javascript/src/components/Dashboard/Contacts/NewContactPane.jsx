import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Toastr } from "@bigbinary/neetoui/v2";
import { Pane, Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";

import NewNoteForm from "./NewContactForm";

const NewNotePane = ({ showPane, onClose }) => {
  const handleSubmit = () => {
    //handle form submit
    onClose();
    Toastr.success("Note added successfully");
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h4">Add New Note</Typography>
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
        />
        <Button style="text" label="Cancel" onClick={onClose} />
      </Pane.Footer>
    </Pane>
  );
};

export default NewNotePane;
