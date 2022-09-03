import React from "react";
import Input from "components/primary/input/input";
import { FaAngleLeft, FaEnvelope } from "react-icons/fa";
import FooterTopLinks from "layout/common/footer/footerTopLinks";

export const footerLinks = [
  {
    title: "اطلاعات مهرپل",
    items: [
      { text: "درباره ما", to: "/" },
      { text: "تماس با ما", to: "/" },
      { text: "قوانین ومقررات", to: "/" },
    ],
  },
  {
    title: "خدمات مشتریان",
    items: [
      { text: "پرسش های متداول", to: "/" },
      { text: "شرایط استفاده", to: "/" },
      { text: "حریم خصوصی", to: "/" },
    ],
  },
  {
    title: "راهنمای خرید",
    items: [
      { text: "نحوه ثبت سفارش", to: "/" },
      { text: "رویه ارسال سفارش", to: "/" },
      {
        text: "شیوه های پرداخت",
        to: "/",
      },
    ],
  },
];

const FooterTop = () => {
  return (
    <div className="footer__top container">
      <div className="footer__top-wrapper">
        <div className="row g-3 align-items-baseline">
          {footerLinks.map((sd, index) => {
            return <FooterTopLinks key={index} {...sd} />;
          })}

          <div className="footer__top-parts col-md-3 col-sm-6">
            <h5 className="footer__top-parts-title">همراه ما باشید</h5>
            <p className="footer__top-parts-join">
              کاربر محترم جهت عضویت در خبرنامه الکترونیکی سایت، ایمیل خود را
              وارد نماییید.
            </p>
            <Input
              type={"email"}
              placeholder="آدرس پست الکترونیک"
              icon={<FaEnvelope />}
              button={
                <button className="btn btn-primary">
                  عضویت
                  <FaAngleLeft />
                </button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
