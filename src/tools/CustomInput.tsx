import React from "react";
import SearchIcon from "./Icons/SearchIcon";

interface props {
  isReversed?: boolean;
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  className?: string;
  value?: string;
}

const CustomInput = ({
  isReversed,
  icon,
  type,
  placeholder,
  onChange,
  className,
  value,
}: props) => {
  return (
    <div
      className={`flex items-center justify-between px-2 py-1 border border-solid border-blue-800 rounded-sm ${
        isReversed ? "flex-row-reverse" : "flex-row"
      } ${className}`}
    >
      <input
        className="border-0 outline-none bg-transparent w-[90%]"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {icon}
    </div>
  );
};

export default CustomInput;
