import React, { useState } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography, Pagination } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

import DeleteAlert from "components/Dashboard/DeleteAlert";

import NewContactPane from "./NewContactPane";
import Table from "./Table";

import Title from "../Title";

const Contacts = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [showMenu, setMenu] = useState(true);
  const [showContactPane, setContactPane] = useState(false);
  const [showDeleteAlert, setDeleteAlert] = useState(false);

  const handleDeleteAlert = () => {
    setDeleteAlert(showDeleteAlert => !showDeleteAlert);
  };

  const handleContactPane = () => {
    setContactPane(!showContactPane);
  };

  const handleCollapseMenu = () => {
    setMenu(showMenu => !showMenu);
  };

  return (
    <div className="flex w-full">
      <MenuBar
        showMenu={showMenu}
        title={
          <div className="flex justify-between">
            <Typography style="h2">Notes</Typography>
          </div>
        }
      >
        <MenuBar.Block label="All" count={0} active />
        <MenuBar.Block label="Archived" count={0} />
        <MenuBar.Block label="Completed" count={0} />
        <MenuBar.Block label="Phase2" count={0} />
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
      </MenuBar>
      <div className="flex flex-col w-full px-5">
        <Title
          addNote={() => handleContactPane()}
          heading="All Contacts"
          buttonLabel="Add Contact"
          collapseMenu={() => handleCollapseMenu()}
        />

        <Table showAlert={() => handleDeleteAlert()} />

        <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
          <Pagination
            count={300}
            pageNo={1}
            pageSize={25}
            navigate={() => {}}
          />
        </div>

        <DeleteAlert
          title="Delete Contact"
          showModal={showDeleteAlert}
          onClose={() => handleDeleteAlert()}
        />

        <NewContactPane
          showPane={showContactPane}
          onClose={() => handleContactPane()}
        />
      </div>
    </div>
  );
};

export default Contacts;
