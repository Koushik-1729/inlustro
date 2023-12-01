import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold2855: "font-poppins font-semibold",
  txtPoppinsRegular28Deeppurple200: "font-normal font-poppins",
  txtKollektifBold50: "font-bold font-kollektif",
  txtKollektif35: "font-kollektif font-normal",
  txtPoppinsRegular2855Purple100: "font-normal font-poppins",
  txtPoppinsRegular23AmberA200: "font-normal font-poppins",
  txtPoppinsRegular25Deeppurple200: "font-normal font-poppins",
  txtKollektif35Purple100: "font-kollektif font-normal",
  txtPoppinsRegular3262: "font-normal font-poppins",
  txtKollektifBold32: "font-bold font-kollektif",
  txtKollektif30: "font-kollektif font-normal",
  txtKollektifBold30: "font-bold font-kollektif",
  txtPoppinsSemiBold28Purple100: "font-poppins font-semibold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtKollektifBold35: "font-bold font-kollektif",
  txtKollektif50: "font-kollektif font-normal",
  txtPoppinsLight30: "font-light font-poppins",
  txtKollektif70: "font-kollektif font-normal",
  txtPoppinsRegular28: "font-normal font-poppins",
  txtPoppinsSemiBold2855Red500: "font-poppins font-semibold",
  txtPoppinsSemiBold3262: "font-poppins font-semibold",
  txtKollektif30WhiteA700: "font-kollektif font-normal",
  txtPoppinsRegular30: "font-normal font-poppins",
  txtPoppinsRegular23Red500: "font-normal font-poppins",
  txtKollektif3262WhiteA7007f: "font-kollektif font-normal",
  txtKollektif48: "font-kollektif font-normal",
  txtKollektif25: "font-kollektif font-normal",
  txtKollektifBold30WhiteA700: "font-bold font-kollektif",
  txtKollektif30WhiteA7007f: "font-kollektif font-normal",
  txtKollektifBold40: "font-bold font-kollektif",
  txtKollektif40: "font-kollektif font-normal",
  txtKollektifBold2515: "font-bold font-kollektif",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsRegular2855: "font-normal font-poppins",
  txtPoppinsRegular23: "font-normal font-poppins",
  txtKollektifBold40Purple100: "font-bold font-kollektif",
  txtKollektif40Deeppurple200: "font-kollektif font-normal",
  txtPoppinsBold50: "font-bold font-poppins",
  txtKollektif3262: "font-kollektif font-normal",
  txtKollektif2855: "font-kollektif font-normal",
  txtPoppinsBold4894: "font-bold font-poppins",
  txtKollektif30Yellow100: "font-kollektif font-normal",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtKollektifItalic30: "font-kollektif font-normal italic",
  txtPoppinsLight2855: "font-light font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
