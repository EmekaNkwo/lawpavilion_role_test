import { createContext, useContext, useState } from "react";

import { IProduct } from "../../models";

type ProductProps = {
  children: React.ReactNode;
};

export interface IProductsContext {
  isFetching: boolean;
  setIsFetching(state: boolean): void;
  products: IProduct[];
  setProducts(products: IProduct[]): void;
}
export interface IProductContext {
  isFetching: boolean;
  setIsFetching(state: boolean): void;
  productId: IProduct[];
  setProduct(product: IProduct[]): void;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);

const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }

  return context;
};

const ProductContext = createContext<IProductContext | undefined>(undefined);
const useProductContext = (): IProductContext => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }

  return context;
};

const ProductsProvider = (props: ProductProps) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const ProductContextValue: IProductsContext = {
    isFetching,
    setIsFetching,
    products,
    setProducts,
  };

  return <ProductsContext.Provider value={ProductContextValue} {...props} />;
};

export { ProductsProvider, useProductsContext, useProductContext };
