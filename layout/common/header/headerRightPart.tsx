import React from "react";
import ActiveLink from "components/activeLink";
import { HeaderType } from "layout/common/header/header";
import { FaBars } from "react-icons/fa";

const HeaderRightPart = ({ links }: HeaderType) => {
  return (
    <ul className="header__right d-flex align-items-center justify-content-center">
      <li className="d-block d-lg-none">
        <FaBars className="fs-4" role="button" />
      </li>
      {links?.map(({ to, text, fa: Fa }, index) => {
        return (
          <li className="header__item d-none d-lg-block" key={index}>
            <ActiveLink
              className="header__right-link"
              activeClassName="header__right-link--active"
              href={to}
            >
              <a>
                <Fa className="header__icon" />
                <span className="header__right-text">{text}</span>
              </a>
            </ActiveLink>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderRightPart;
