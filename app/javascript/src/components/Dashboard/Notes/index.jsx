import React, { useState } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography, Button, Input } from "@bigbinary/neetoui/v2";
import { MenuBar, Header } from "@bigbinary/neetoui/v2/layouts";

import { BURGER_MENU } from "components/Common/Icons";

import Card from "./Card";
import { NOTES_DATA } from "./constants";

const Notes = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  const ActionBlock = () => {
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
          icon={() => <Plus size={16} className="ml-3" />}
        />
      </div>
    );
  };

  return (
    <div className="flex w-full">
      <MenuBar
        showMenu={true}
        title={
          <div className="flex justify-between">
            <Typography style="h2">Notes</Typography>
          </div>
        }
      >
        <MenuBar.Block label="All" count={200} active />
        <MenuBar.Block label="Users" count={80} />
        <MenuBar.Block label="Leads" count={60} />
        <MenuBar.Block label="Visitors" count={60} />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed)
            }
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>

        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />
            },

            {
              icon: () => <Plus size={20} />
            },
            {
              icon: () => <Settings size={20} />
            }
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>

        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.Block label="Sales" count={80} />
        <MenuBar.Block label="Finance" count={60} />
        <MenuBar.Block label="Asia" count={60} />
      </MenuBar>

      <div className="flex flex-col content-start justify-items-start w-full p-5">
        <Header
          actionBlock={<ActionBlock />}
          menuBarHandle={
            <Button className="mr-2" icon={() => BURGER_MENU} style="text" />
          }
          title={
            <div className="flex items-center">
              <h3>All Notes</h3>
            </div>
          }
        />

        {NOTES_DATA.map((note, index) => (
          // <ListNote
          //   key={index}
          //   title={note.title}
          //   body={note.body}
          //   status={note.status}
          // />
          <Card
            key={index}
            title={note.title}
            body={note.body}
            status={note.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
