import React, { FormEvent } from "react";

interface props {
  children: React.ReactNode;
  onClick?: (() => void) | ((e: any) => void);
  className?: string;
  isModal?: boolean;
  htmlFor?: string;
  icon?: React.ReactNode;
  theme?: "primary" | "secondary" | "error";
}

const CustomButton = ({
  children,
  onClick,
  className,
  isModal,
  htmlFor,
  icon,
  theme,
}: props) => {
  if (isModal) {
    return (
      <label
        htmlFor={htmlFor}
        onClick={onClick}
        className={`border border-solid ${
          theme === "primary" &&
          "border-blue-700 bg-blue-400 text-white hover:bg-[steelblue]"
        } ${
          theme === "error" &&
          "border-red-700 text-white bg-red-400 hover:bg-red-700"
        } ${
          theme === "secondary" && "bg-gray-700 text-white hover:bg-gray-800"
        } px-5 py-1 rounded-sm ${className} flex justify-between items-center`}
      >
        {children}
        {icon}
      </label>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`border border-solid ${
          theme === "primary" &&
          "border-blue-700 bg-blue-400 text-white hover:bg-[steelblue]"
        } ${
          theme === "error" &&
          "border-red-700 text-white bg-red-400 hover:bg-red-700"
        } ${
          theme === "secondary" && "bg-gray-700 text-white hover:bg-gray-800"
        } px-5 py-1 rounded-sm ${className} flex justify-between items-center`}
      >
        {children}
        {icon}
      </button>
    );
  }
};

export default CustomButton;
