import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";

function App() {
  // const dispatch = useDispatch();
  // const { per_page, currentPage, products, search } = useSelector(
  //   (state: rootStateType) => state.products
  // );

  // useEffect(() => {
  //   fetch(
  //     `https://reactjr.coderslab.online/api/products?search=${search}&per_page=${per_page}&page=${currentPage}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data?.data);
  //       dispatch(
  //         getProducts({
  //           currentPage: data?.data?.current_page,
  //           products: data?.data?.data,
  //         })
  //       );
  //     })
  //     .catch((e) => console.log(e));
  // }, [search, per_page, currentPage]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
