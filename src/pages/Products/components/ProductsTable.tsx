import React, { useEffect } from "react";
import CustomButton from "../../../tools/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../../../app/store";
import { orderDatailsType, productType } from "../../../../utils/typs";
import ProductsTableRow from "./ProductsTableRow";
import { useGetProductsQuery } from "../../../features/products/productsApi";
import { getProducts } from "../../../features/products/productsSlice";
import { useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../../features/orders/ordersApi";
import { chooseProduct } from "../../../features/orders/ordersSlice";

const ProductsTable = () => {
  const { products, per_page, currentPage, search } = useSelector(
    (state: rootStateType) => state.products
  );
  const { pageTitle } = useSelector((state: rootStateType) => state.main);
  const dispatch = useDispatch();

  const { data } = useGetProductsQuery({
    page: currentPage,
    per_page,
    search,
  });

  useEffect(() => {
    console.log(data);
    console.log(data?.data?.data);
    dispatch(
      getProducts({
        currentPage: data?.data?.current_page,
        products: data?.data?.data,
      })
    );
  }, [data, currentPage]);

  // const { id: orderId } = useParams();

  //   const { data: orderData } = useGetOrderByIdQuery(orderId);

  //   useEffect(() => {
  //     console.log(orderData);
  //     // orderData?.data?.details?.forEach((detail:orderDatailsType) => dispatch(chooseProduct({id:detail?.variant?.product_id,name: })) )
  //   }, [data]);

  return (
    <div className="h-[500px] overflow-y-scroll">
      <table
        style={{
          borderCollapse: "collapse",
        }}
        className="w-full"
      >
        <thead className="sticky top-0 z-50">
          <tr>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              ID
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Name
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Brand
            </th>
            <th
              scope="col"
              className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
            >
              Type
            </th>
            {pageTitle?.includes("|") ? (
              <th
                scope="col"
                className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
              >
                Select{" "}
              </th>
            ) : (
              <>
                <th
                  scope="col"
                  className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
                >
                  Created At
                </th>
                <th
                  scope="col"
                  className="bg-[#0f9ed5] text-center text-white py-2 border border-solid border-[white] text-[14px]"
                >
                  Actions
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {products?.map((product: productType, i: number) => (
            <ProductsTableRow index={i} product={product} key={product?.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
