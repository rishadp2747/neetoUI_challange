import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Typography, Tooltip, Tag, Avatar } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

const CardFooter = ({ status }) => {
  return (
    <div className="flex flex-row border-t neeto-ui-border-gray-400 pt-3">
      <Tag size="small" style="outline" label="Getting Started" color="grey" />

      <div className="flex flex-row  items-center ml-auto">
        <Tooltip placement={"bottom-start"} content={"Wednesday, 10:30 AM"}>
          <div className="flex flex-row items-cente  px-2">
            <Clock size={18} color="#87929d" className="m-0.5 mx-1.5" />
            <Typography style="body2" className="neeto-ui-text-gray-500">
              {status} 2 hours ago
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
  );
};

CardFooter.propTypes = {
  status: PropTypes.string
};

export default CardFooter;
