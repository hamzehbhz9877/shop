import React from "react";
import { HeaderLinks } from "layout/panel/admin/links/headerLinks";
import HeaderLeftPart from "layout/common/header/headerLeftPart";
import HeaderRightPart from "layout/common/header/headerRightPart";

export type HeaderType = {
  links: typeof HeaderLinks;
};

const Header = ({ links }: HeaderType) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <HeaderRightPart links={links} />
      <HeaderLeftPart />
    </div>
  );
};

export default Header;
