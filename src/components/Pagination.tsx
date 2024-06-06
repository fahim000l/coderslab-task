import React, { useState } from "react";
import LeftArrowCap from "../tools/Icons/LeftArrowCap";
import RightArrowCap from "../tools/Icons/RightArrowCap";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../app/store";
import { setCurrentPage } from "../features/products/productsSlice";

const Pagination = () => {
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4]);
  const { currentPage } = useSelector((state: rootStateType) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 mx-auto">
      <button
        onClick={() => {
          if (currentPage !== 1) {
            dispatch(setCurrentPage(currentPage - 1));
          }
        }}
        className="bg-[#83cbeb] text-white p-2 rounded-sm hover:bg-[steelblue]"
      >
        <LeftArrowCap />
      </button>
      {pages?.map((number) => (
        <button
          onClick={() => dispatch(setCurrentPage(number))}
          className={`${
            currentPage === number ? "bg-[steelblue]" : "bg-[#83cbeb]"
          } text-white p-2 rounded-sm hover:bg-[steelblue]`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => {
          //   setPages([4, 5, 6, 7]);
          //   if()
          dispatch(setCurrentPage(currentPage + 1));
        }}
        className="bg-[#83cbeb] text-white p-2 rounded-sm hover:bg-[steelblue]"
      >
        <RightArrowCap />
      </button>
    </div>
  );
};

export default Pagination;
