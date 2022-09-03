import React from 'react';
import {FaComment, FaPhone, FaQuestionCircle} from "react-icons/fa";
import {Link} from 'react-scroll'

const TabItems = () => {

    return (
        <div className="product__tab-items">
            <ul className="d-flex">
                <li >
                    <Link className="btn btn-athens-gray"  activeClass="active" to="introduction" spy={true} >
                        <FaPhone/>
                        معرفی</Link>
                </li>
                <li  >
                      <Link className="btn btn-athens-gray" activeClass="active" to="specifications" spy={true} >
                          <FaPhone/>
                          مشخصات</Link>

                </li>
                <li  >
                      <Link className="btn btn-athens-gray" activeClass="active" to="comments" spy={true} >
                          <FaComment/>
                          دیگاه ها</Link>

                </li>
                <li  >
                      <Link className="btn btn-athens-gray" activeClass="active" to="questions" spy={true} >
                          <FaQuestionCircle/>
                          پرسش ها</Link>

                </li>
            </ul>
        </div>
    );
};

export default TabItems;