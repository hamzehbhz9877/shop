import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import ToomanIcon from "components/toomanIcon/toomanIcon";

const SidebarTop = () => {
  return (
    <div className="sidebar__top">
      <div className="sidebar__top-profile d-flex align-items-center position-relative">
        <img
          className="sidebar__top-profile-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBrqwdokQSkszt_TqGFvsFhmyYOdrUi7bmnM9PvSb5dXS9pH_RLNYqmL2Ri-N-SIR2ps&usqp=CAU"
          alt=""
        />
        <div>
          <h5 className="sidebar__top-profile-user-name mb-0">حمزه بهرامی</h5>
          <span className="sidebar__top-profile-phone-number ">
            09915648288
          </span>
        </div>

        <div className="sidebar__top-line" />
        <div className="sidebar__top-dot" />
      </div>
      <div className="sidebar__top-wallet d-flex align-baseline justify-content-between">
        <div>
          <h5 className="sidebar__top-wallet-text  mb-0">کیف پول</h5>
          <span role="button" className="sidebar__top-wallet-increase  mb-0">
            افزایش موجودی
            <FaAngleLeft className="me-1" />
          </span>
        </div>
        <div>
          <span className=" color-mischka sidebar__top-inventory">195000</span>
          <ToomanIcon />
        </div>
      </div>
    </div>
  );
};

export default SidebarTop;
