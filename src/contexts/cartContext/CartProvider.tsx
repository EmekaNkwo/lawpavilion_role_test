import { createContext, useContext, useState } from "react";
import { ICartProduct, ICartTotal } from "../../models";

type CartProps = {
  children: React.ReactNode;
};
export interface ICartContext {
  products: ICartProduct[];
  setProducts(products: ICartProduct[]): void;
  total: ICartTotal;
  setTotal(products: any): void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);
const useCartContext = (): ICartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

const totalInitialValues = {
  productQuantity: 0,
  totalPrice: 0,
  taxValue: 0,
  totalCost: 0,
  currencyId: "USD",
  currencyFormat: "$",
};

const CartProvider = (props: CartProps) => {
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [total, setTotal] = useState<ICartTotal>(totalInitialValues);

  const CartContextValue: ICartContext = {
    products,
    setProducts,
    total,
    setTotal,
  };

  return <CartContext.Provider value={CartContextValue} {...props} />;
};

export { CartProvider, useCartContext };
