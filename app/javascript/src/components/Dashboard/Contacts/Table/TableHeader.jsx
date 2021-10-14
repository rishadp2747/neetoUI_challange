import React from "react";

import { Checkbox } from "@bigbinary/neetoui/v2";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>
          <Checkbox name="header" />
        </th>
        <th>Name & Roll</th>
        <th>Email</th>
        <th>Created At</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
