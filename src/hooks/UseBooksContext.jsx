import { useContext } from "react";
import BooksContext from "../context/Books";

const useBookContext = () => {
  return useContext(BooksContext);
};

export default useBookContext;
