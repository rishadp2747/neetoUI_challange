import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

const CardHeader = ({ title }) => {
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
          <li>Edit</li>
          <li>Delete</li>
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

export default CardHeader;
