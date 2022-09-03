import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type inputElement = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends inputElement {
  type: "text" | "number" | "email" | "password";
  label?: string;
  name?: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
}

const Input = ({ type, label, name, icon, button, ...rest }: Props) => {
  const ButtonWithExtraProps = React.cloneElement(button as any, {
    className: `input__button ${button?.props.className}`,
  });
  const IconWithExtraProps = React.cloneElement(icon as any, {
    className: `input__icon ${icon?.props.className}`,
  });

  return (
    <div className="form-group input">
      {label && <label className="form-label input__label">{label}</label>}
      {IconWithExtraProps}
      <input
        type={type}
        className={`form-control ${icon ? "input__box" : ""} ${
          rest.className ?? ""
        }`}
        {...rest}
      />
      {ButtonWithExtraProps}
    </div>
  );
};

export default Input;
