import React from "react";
import { SidebarLinks } from "layout/panel/admin/links/sidebarLinks";
import SidebarTop from "layout/panel/sidebar/sidebarTop";
import SidebarBottom from "layout/panel/sidebar/sidebarBottom";

export type SidebarType = {
  links: typeof SidebarLinks;
};

const Sidebar = ({ links }: SidebarType) => {
  return (
    <>
      <SidebarTop />
      <SidebarBottom links={links} />
    </>
  );
};

export default Sidebar;
