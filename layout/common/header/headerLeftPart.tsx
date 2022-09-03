import React from 'react';
import Link from "next/link";
import {FaAngleLeft, FaShoppingBasket} from "react-icons/fa";
import CountLabel from "components/countLabel/countLabel";

const HeaderLeftPart = () => {
    return (
        <ul className="header__left d-flex align-items-center justify-content-center">
            <li className="header__item">
                <div className="header__left-order-basket">
                    <CountLabel className="header__left-order-basket-count-label" count={4}/>
                    <Link href={"/"}>
                        <a className="header__left-link">
                            <FaShoppingBasket className="header__icon"/>
                            <span className="header__right-text d-none d-lg-inline">سبد سفارش</span>
                        </a>
                    </Link>
                </div>
            </li>

            <li className="header__item">
                <div className="header__left-user" role="button">
                    <img className="header__left-user-img"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54088iJjHpn-y9FCxGAh5NBEdHugwIXewWQ&usqp=CAU"
                         alt=""/>
                    <span className="header__left-user-text">حمزه بهرامی</span>
                    <span>
                <FaAngleLeft className="header__left-user-icon-opacity"/>
                    <FaAngleLeft/>
                </span>
                </div>

            </li>
        </ul>
    );
};

export default HeaderLeftPart;