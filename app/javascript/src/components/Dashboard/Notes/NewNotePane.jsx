import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Pane, Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";

import NewNoteForm from "./NewNoteForm";

const NewNotePane = ({ showPane, onClose }) => {
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h4">Add New Note</Typography>
      </Pane.Header>
      <Pane.Body>
        <NewNoteForm />
      </Pane.Body>
      <Pane.Footer className="flex space-x-4">
        <Button
          label="Save Changes"
          type="submit"
          icon={() => <Check size={18} className="ml-2" />}
        />
        <Button style="text" label="Cancel" onClick={onClose} />
      </Pane.Footer>
    </Pane>
  );
};

export default NewNotePane;
