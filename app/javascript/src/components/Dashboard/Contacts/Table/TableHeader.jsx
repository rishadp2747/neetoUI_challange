import React from "react";

import { Checkbox } from "@bigbinary/neetoui/v2";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>
          <Checkbox name="header" />
        </th>
        <th className="px-3">Name & Roll</th>
        <th className="px-3">Email</th>
        <th className="px-3">Created At</th>
        <th className="px-3"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
