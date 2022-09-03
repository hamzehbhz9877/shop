import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="footer__bottom">
      <div className="container h-100">
        <div className="d-flex gap-5  flex-column-reverse flex-sm-row h-100 justify-content-center justify-content-sm-between">
          <div className="align-self-center align-self-sm-end">
            <div className="footer__bottom-social-media">
              <span>
                <FaTelegram />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaWhatsapp />
              </span>
            </div>
            <p className="footer__bottom-rights mb-0">
              کلیه حقوق این سایت متعلق به مهرپل میباشد.
            </p>
          </div>
          <div className="d-flex gap-2 footer__bottom-permissions shadow-sm align-self-center align-self-sm-end">
            <div>
              <img
                src="https://www.digikala.com/statics/img/png/rezi.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.digikala.com/statics/img/png/kasbokar.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.digikala.com/statics/img/png/enamad.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
