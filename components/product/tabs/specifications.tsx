import React from "react";

const list = [
  { title: "طرح", value: "طرح دار" },
  {
    title: "طرح",
    value: "شیار مجزا کارت حافظه\n" + "\n",
  },
  {
    title: "طرح",
    value: "۸.۸×۷۶.۴×۱۶۵.۱\n" + "\n",
  },
  {
    title: "طرح",
    value: "۱۹۵ گرم\n" + "\n",
  },
  {
    title: "طرح",
    value: "PLS IPS\n" + "\n",
  },
  {
    title: "طرح",
    value: "۶.۰ اینچ و بزرگتر\n" + "\n",
  },
];
const Specifications = () => {
  return (
    <div className="product__specifications" id="specifications">
      <h6 className="section-title">مشخصات</h6>
      <div>
        <ul>
          {list.map((item, index) => (
            <li
              className="d-flex color-pale-sky product__tab-specification-item"
              key={index}
            >
              <div>
                <p className="lh-lg m-0">{item.title}</p>
              </div>
              <div>
                <span>{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
