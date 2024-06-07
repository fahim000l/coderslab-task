import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../features/main/mainSlice";

const useTitle = (title: string): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = title;
    dispatch(setPageTitle(title));
  }, [title]);
};

export default useTitle;
