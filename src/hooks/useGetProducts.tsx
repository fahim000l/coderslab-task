import { useEffect, useState } from "react";
import { productType } from "../../utils/typs";

export function useGetProducts({
  per_page,
  page,
  search,
}: {
  per_page: number;
  page: number;
  search: string;
}) {
  const [products, setProducts] = useState<productType[] | never[]>([]);

  useEffect(() => {
    fetch(
      `http://reactjr.coderslab.online/api/products?search=${search}&per_page=${per_page}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, [per_page, page, search]);

  return { products };
}
