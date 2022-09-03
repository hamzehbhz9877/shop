import React from 'react';
import {footerLinks} from "layout/common/footer/footerTop";


const FooterTopLinks = ({title,items}:typeof footerLinks[0]) => {
    return (
        <div className="footer__top-parts col-md-3 col-sm-6">
            <h5 className="footer__top-parts-title">{title}</h5>
            <ul>
                {items.map((item,index) => <li key={index} className="footer__top-parts-item">
                    <a href={item.to}>{item.text}</a>
                </li>)}
            </ul>
        </div>
    );
};

export default FooterTopLinks;