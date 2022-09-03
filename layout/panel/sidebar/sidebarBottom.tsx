import React from "react";
import ActiveLink from "components/activeLink";
import { SidebarType } from "layout/panel/sidebar/sidebar";
import { FaAngleLeft, FaArrowLeft } from "react-icons/fa";
import CountLabel from "components/countLabel/countLabel";

const SidebarBottom = ({ links }: SidebarType) => {
  return (
    <ul className="sidebar__bottom-bottom">
      {links?.map(({ to, text, fa: Fa }, index) => {
        return (
          <li className="sidebar__bottom-item position-relative" key={index}>
            <ActiveLink
              className="sidebar__bottom-link d-flex align-items-center"
              activeClassName="sidebar__bottom-link--active"
              href={to}
            >
              <a>
                <Fa className="sidebar__bottom-icon" />
                <span className="sidebar__bottom-text">{text}</span>
                <FaAngleLeft className="sidebar__bottom-icon-angle-left me-auto" />
                <FaArrowLeft className="sidebar__bottom-icon-arrow-left d-none  me-auto" />
              </a>
            </ActiveLink>
            {text === "پیغام ها" && (
              <CountLabel
                count={6}
                className="sidebar__bottom-link-count-label"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarBottom;
