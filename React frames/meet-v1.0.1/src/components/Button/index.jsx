import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[23px]" };
const variants = {
  fill: {
    deep_purple_200: "bg-deep_purple-200 text-white-A700",
    green_300_7f: "bg-green-300_7f text-white-A700",
    red_500_7f: "bg-red-500_7f text-white-A700",
    amber_A200_7f: "bg-amber-A200_7f text-white-A700",
    blue_300_60: "bg-blue-300_60 text-white-A700",
    blue_gray_100_21: "bg-blue_gray-100_21 text-white-A700",
  },
};
const sizes = { xs: "p-[11px]", sm: "p-[25px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "blue_gray_100_21",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_purple_200",
    "green_300_7f",
    "red_500_7f",
    "amber_A200_7f",
    "blue_300_60",
    "blue_gray_100_21",
  ]),
};

export { Button };
