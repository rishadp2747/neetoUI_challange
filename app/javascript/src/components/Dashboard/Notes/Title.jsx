import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Button, Input } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

import { BURGER_MENU } from "components/Common/Icons";

const ActionBlock = ({ addNote }) => {
  return (
    <div className="flex space-x-4">
      <Input
        key="header_search"
        placeholder="Search Name, Email, Phone Number, Etc."
        prefix={<Search size={16} />}
      />
      <Button
        key="header_button"
        label="Add Note"
        onClick={addNote}
        icon={() => <Plus size={16} className="ml-3" />}
      />
    </div>
  );
};

const Title = ({ heading, addNote }) => {
  return (
    <Header
      actionBlock={<ActionBlock addNote={addNote} />}
      menuBarHandle={
        <Button className="mr-2" icon={() => BURGER_MENU} style="text" />
      }
      title={
        <div className="flex items-center">
          <h3>{heading}</h3>
        </div>
      }
    />
  );
};

export default Title;
