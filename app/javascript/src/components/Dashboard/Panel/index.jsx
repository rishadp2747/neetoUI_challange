import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Pane, Button } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

const Panel = ({ children, title, showPane, onClose, onSubmit }) => {
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <h2>{title}</h2>
      </Pane.Header>
      <Pane.Body>{children}</Pane.Body>
      <Pane.Footer className="flex space-x-4">
        <Button
          label="Save Changes"
          type="submit"
          icon={() => <Check size={18} className="ml-2" />}
          onClick={onSubmit}
        />
        <Button style="text" label="Cancel" onClick={onClose} />
      </Pane.Footer>
    </Pane>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
  showPane: PropTypes.bool,
  onClose: PropTypes.func
};

export default Panel;
