import { useCallback } from "react";

import { useProductsContext } from "../contexts/productContext/ProductProvider";
// import { IProduct } from "../models";
import { getProducts } from "../services/getProduct";

const useProducts = () => {
  const { isFetching, setIsFetching, products, setProducts } =
    useProductsContext();

  const fetchProducts = useCallback(() => {
    setIsFetching(true);

    getProducts().then((res) => {
      setIsFetching(false);
      setProducts(res.data);
    });
  }, [setIsFetching, setProducts]);

  return {
    isFetching,
    fetchProducts,
    products,
  };
};

export default useProducts;
