import React from "react";
import { useSelector } from "react-redux";
import { rootStateType } from "../app/store";

const Header = () => {
  const { pageTitle } = useSelector((state: rootStateType) => state.main);

  return (
    <div className="bg-[#83cbeb] text-center p-5 flex place-content-center">
      <p className="bg-[#c1e5f5] w-[40%] py-2 text-center rounded-lg text-xl font-semibold">
        {pageTitle}
      </p>
    </div>
  );
};

export default Header;
