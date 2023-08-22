import React from "react";

const sizeClasses = {
  txtPoppinsBold18: "font-bold font-poppins",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtInterSemiBold139: "font-inter font-semibold",
  txtInterMedium23: "font-inter font-medium",
  txtInterBold48: "font-bold font-inter",
  txtInterBold22: "font-bold font-inter",
  txtInterBold45: "font-bold font-inter",
  txtPoppinsBold14: "font-bold font-poppins",
  txtInterSemiBold50: "font-inter font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterBold60: "font-bold font-inter",
  txtPoppinsBlack14: "font-black font-poppins",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterMedium17: "font-inter font-medium",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterBold45WhiteA700: "font-bold font-inter",
  txtInterMedium15: "font-inter font-medium",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterSemiBold30WhiteA700: "font-inter font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
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
