import React from "react";

// import { Toastr } from "neetoui";
import { UserCircle, NeetoInsights } from "@bigbinary/neeto-icons";
import { Sidebar } from "@bigbinary/neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

import { noteIcon, orgLogo } from "../../../icons";

// import authenticationApi from "apis/authentication";
// import { resetAuthTokens } from "apis/axios";
// import { useAuthDispatch } from "contexts/auth";

const NavBar = () => {
  // const authDispatch = useAuthDispatch();
  // const handleLogout = async () => {
  //   try {
  //     await authenticationApi.logout();
  //     authDispatch({ type: "LOGOUT" });
  //     resetAuthTokens();
  //     window.location.href = "/";
  //   } catch (error) {
  //     Toastr.error(error);
  //   }
  // };

  const SIDEBAR_LINKS = [
    {
      label: "Notes",
      to: "/notes",
      icon: () => noteIcon
    },
    {
      label: "Contacts",
      to: "/login",
      icon: () => <UserCircle color="#1e1e20" size={24} />
    },
    {
      label: "Settings",
      to: "/my/profile",
      icon: () => <NeetoInsights color="#1e1e20" size={24} />
    }
  ];

  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        isCollapsed={true}
        organizationInfo={{
          logo: orgLogo
        }}
        navLinks={SIDEBAR_LINKS}
        profileInfo={{
          name: "Kieran Miller",
          email: "kieranmiller@gmail.com",
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
          dropdownProps: [
            {
              label: "Edit"
            },
            {
              label: "Logout"
            }
          ]
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
