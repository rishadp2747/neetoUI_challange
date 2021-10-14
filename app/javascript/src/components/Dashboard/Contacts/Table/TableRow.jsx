import React from "react";

import { Checkbox, Dropdown, Avatar, Typography } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

const TableRow = ({ check, name, profileImg, email, createdAt, role }) => {
  return (
    <tbody>
      <tr>
        <td>
          <Checkbox name={check} />
        </td>
        <td>
          <div className="flex flex-row">
            <div>
              <Avatar
                size="large"
                user={{
                  imageUrl: profileImg,
                  name: name
                }}
              />
            </div>
            <div className="flex flex-col  px-2">
              <Typography style="h4">{name}</Typography>
              <Typography style="body1" className="neeto-ui-text-gray-500">
                {role}
              </Typography>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{createdAt}</td>

        <td>
          <div className="flex flex-row items-center justify-end space-x-3">
            <Dropdown buttonStyle="text" position="bottom-end">
              <li>Edit</li>
              <li>Delete</li>
            </Dropdown>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

TableRow.propTypes = {
  check: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  email: PropTypes.string,
  profileImg: PropTypes.string,
  createdAt: PropTypes.string
};

export default TableRow;
