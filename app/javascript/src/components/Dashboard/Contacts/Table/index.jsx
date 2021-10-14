import React from "react";

import { CONTACTS } from "./constants";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <table className="neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions">
      <TableHeader />

      {CONTACTS.map((rec, index) => (
        <TableRow
          key={index}
          check={index.toString()}
          name={rec.name}
          email={rec.email}
          createdAt={rec.created}
          role={rec.roll}
          profileImg={rec.profileImg}
        />
      ))}
    </table>
  );
};

export default Table;
