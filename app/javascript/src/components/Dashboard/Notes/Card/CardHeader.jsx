import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import PropTypes from "prop-types";

const CardHeader = ({ title, showAlert, editNote }) => {
  return (
    <Header
      className="p-px"
      actionBlock={
        <Dropdown
          key="card_option"
          buttonStyle="text"
          position="bottom-end"
          icon={() => <MenuVertical size={17} />}
        >
          <li onClick={editNote}>Edit</li>
          <li onClick={showAlert}>Delete</li>
        </Dropdown>
      }
      title={
        <div className="flex items-center">
          <Typography style="h4" className="m-0">
            {title}
          </Typography>
        </div>
      }
    />
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  editNote: PropTypes.func,
  showAlert: PropTypes.func
};

export default CardHeader;
