import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import {
  Typography,
  Dropdown,
  Tooltip,
  Tag,
  Avatar
} from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

const ListNote = props => {
  return (
    <div className="flex neeto-ui-border-gray-400  neeto-ui-shadow-xs border px-3  my-2 flex-col">
      <Header
        className="p-px pt-3"
        actionBlock={
          <Dropdown
            key="card_option"
            label=""
            buttonStyle="text"
            position="bottom-end"
            icon={() => <MenuVertical size={18} />}
            className="m-0"
          >
            <li>Edit</li>
            <li>Delete</li>
          </Dropdown>
        }
        title={
          <div className="flex items-center">
            <Typography style="h4" className="m-0">
              {props.title}
            </Typography>
          </div>
        }
      />
      <Typography style="body2" className="pt-0 mt-0 pb-3">
        {props.body}
      </Typography>
      <div className="flex flex-row border-t neeto-ui-border-gray-400 py-3">
        <Tag
          size="small"
          style="outline"
          label="Getting Started"
          color="grey"
        />

        <div className="flex flex-row  items-center ml-auto">
          <Tooltip placement={"bottom-start"} content={"Wednesday, 10:30 AM"}>
            <div className="flex flex-row items-cente  px-2">
              <Clock size={18} color="#87929d" className="m-0.5" />
              <Typography style="body2" className="neeto-ui-text-gray-500">
                {props.status} 2 hours ago
              </Typography>
            </div>
          </Tooltip>
          <Avatar
            user={{
              imageUrl: "https://randomuser.me/api/portraits/women/90.jpg"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ListNote;
