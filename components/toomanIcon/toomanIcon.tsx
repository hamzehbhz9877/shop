import { ComponentProps } from "react";

const ToomanIcon = ({ className, ...rest }: ComponentProps<"span">) => {
  return (
    <span className={`tomman-text me-1 fw-bold ${className ?? ""} `} {...rest}>
      توما<span className="tomman__last-letter">ن</span>
    </span>
  );
};

export default ToomanIcon;
