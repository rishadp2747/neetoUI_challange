import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

const ListNote = () => {
  return (
    <div className="flex neeto-ui-border-gray-400  neeto-ui-shadow-xs border p-3 flex-col">
      <Header
        className="py-2"
        actionBlock={
          <Button
            style="text"
            key="card_option"
            label=""
            icon={() => <MenuVertical size={18} />}
          />
        }
        title={
          <div className="flex items-center">
            <Typography style="h4">How to claim the warranty?</Typography>
          </div>
        }
      />
      <Typography style="body2">
        "Are you getting my text???" She texted to him. He glanced at it and
        chuckled under his breath. Of course he was getting them, but if he
        wasn't getting
      </Typography>
      <div className="flex flex-row border-t neeto-ui-border-gray-400 mt-2 py-2">
        <Button
          style="secondary"
          key="card_option"
          label="Getting Started"
          size="default"
          className="border-solid border text-gray-500 neeto-ui-border-gray-400 rounded-sm  bg-gray-100"
        />
      </div>
    </div>
  );
};

export default ListNote;
