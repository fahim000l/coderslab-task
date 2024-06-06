import React from "react";

interface props {
  title: string;
}

const Header = ({ title }: props) => {
  return (
    <div className="bg-[#83cbeb] text-center p-5 flex place-content-center">
      <p className="bg-[#c1e5f5] w-[40%] py-2 text-center rounded-lg text-xl font-semibold">
        {title}
      </p>
    </div>
  );
};

export default Header;
