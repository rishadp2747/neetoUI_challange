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
          check={index}
          name={rec.name}
          email={rec.email}
          createdAt={rec.created}
          role={rec.roll}
          profileImg={rec.profileImg}
        />
      ))}

      {/*

      <tbody>
        {Array(50)
          .fill()
          .map((_, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <Checkbox name="1" />
                </td>
                <td>Goutham Subramanyam</td>
                <td>goutham.subramanyam@bigbinary.com</td>
                <td>BigBinary</td>
                <td>+91 9633123456</td>
                <td>
                  <div className="flex flex-row items-center justify-end space-x-3">
                    <Dropdown
                      icon={MenuHorizontal}
                      buttonStyle="icon"
                      autoWidth
                    >
                      <li>Edit</li>
                      <li>Delete</li>
                    </Dropdown>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox name="2" />
                </td>
                <td>Edwin Babu</td>
                <td>edwin.babu@bigbinary.com</td>
                <td>BigBinary</td>
                <td>+91 8281331983</td>
                <td>
                  <div className="flex flex-row items-center justify-end space-x-3">
                    <Dropdown
                      icon={MenuHorizontal}
                      buttonStyle="icon"
                      autoWidth
                    >
                      <li>Edit</li>
                      <li>Delete</li>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))} */}
      {/* </tbody> */}
    </table>
  );
};

export default Table;
