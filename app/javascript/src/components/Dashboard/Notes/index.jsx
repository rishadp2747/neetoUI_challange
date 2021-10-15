import React, { useState } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

import Title from "components/Dashboard/Title";

import Card from "./Card";
import { NOTES_DATA } from "./constants";
import NewNotePane from "./NewNotePane";

import DeleteAlert from "../DeleteAlert";

const Notes = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [showDeleteAlert, setDeleteAlert] = useState(false);
  const [showNotePane, setNotePane] = useState(false);

  const handleDeleteAlert = () => {
    setDeleteAlert(showDeleteAlert => !showDeleteAlert);
  };

  const handleNotePane = () => {
    setNotePane(showNotePane => !showNotePane);
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
        <Title addNote={() => handleNotePane()} heading="All Notes" />

        {NOTES_DATA.map((note, index) => (
          <Card
            key={index}
            title={note.title}
            status={note.status}
            showAlert={() => handleDeleteAlert()}
            editNote={() => null}
          >
            <Typography style="body2">{note.body}</Typography>
          </Card>
        ))}

        <DeleteAlert
          showModal={showDeleteAlert}
          onClose={() => handleDeleteAlert()}
        />

        <NewNotePane showPane={showNotePane} onClose={() => handleNotePane()} />
      </div>
    </div>
  );
};

export default Notes;
