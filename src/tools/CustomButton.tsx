import React, { FormEvent } from "react";

interface props {
  children: React.ReactNode;
  onClick?: (() => void) | ((e: any) => void);
  className?: string;
}

const CustomButton = ({ children, onClick, className }: props) => {
  return (
    <button
      onClick={onClick}
      className={`border border-solid border-blue-700 bg-blue-400 text-white px-5 py-1 rounded-sm hover:bg-[steelblue] ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
