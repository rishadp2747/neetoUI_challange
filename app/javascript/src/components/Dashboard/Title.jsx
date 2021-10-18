import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Button, Input } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

import { BURGER_MENU } from "components/Common/Icons";

const ActionBlock = ({ addNote, buttonLabel }) => {
  return (
    <div className="flex space-x-4">
      <Input
        key="header_search"
        placeholder="Search Name, Email, Phone Number, Etc."
        prefix={<Search size={16} />}
      />
      <Button
        key="header_button"
        label={buttonLabel}
        onClick={addNote}
        icon={() => <Plus size={16} className="ml-3" />}
      />
    </div>
  );
};

const Title = ({ heading, addNote, buttonLabel, collapseMenu }) => {
  return (
    <Header
      actionBlock={<ActionBlock addNote={addNote} buttonLabel={buttonLabel} />}
      menuBarHandle={
        <Button
          className="mr-2"
          icon={() => BURGER_MENU}
          style="text"
          onClick={collapseMenu}
        />
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
