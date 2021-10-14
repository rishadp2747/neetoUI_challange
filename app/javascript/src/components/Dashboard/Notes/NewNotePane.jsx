import React from "react";

import NewNoteForm from "./NewNoteForm";
import Panel from "./Panel";

const NewNotePane = ({ showPane, onClose }) => {
  return (
    <Panel title="Add New Note" showPane={showPane} onClose={onClose}>
      <NewNoteForm />
    </Panel>
  );
};

export default NewNotePane;
