import React from "react";
import { FaAngleLeft, FaHome } from "react-icons/fa";

type AccordionType = {
  items: Array<String>;
};
const Accordion = ({ items }: AccordionType) => {
  return (
    <div className="card accordion shadow-sm">
      <ul className="accordion__list">
        <li className="d-inline-block">
          <FaHome className="accordion__icon-base" />
          <span role="button">صفحه اصلی</span>
        </li>
        {items.map((item, index) => (
          <li className="d-inline-block" key={index}>
            <FaAngleLeft className="accordion__icon" />
            <span role="button">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
