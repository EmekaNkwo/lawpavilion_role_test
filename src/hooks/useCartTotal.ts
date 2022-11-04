import { useCartContext } from "../contexts/cartContext/CartProvider";
import { ICartProduct } from "../models";

const useCartTotal = () => {
  const { total, setTotal } = useCartContext();

  const updateCartTotal = (products: ICartProduct[]) => {
    const productQuantity = products.reduce(
      (sum: number, product: ICartProduct) => {
        sum += product.quantity;
        return sum;
      },
      0
    );

    const totalPrice = products.reduce((sum: number, product: ICartProduct) => {
      sum += product.price * product.quantity;
      return sum;
    }, 0);
    const taxValue = products.reduce((tax: number) => {
      tax += (totalPrice * 21) / 100;
      return tax;
    }, 0);
    const totalCost = products.reduce((total: number) => {
      total += taxValue + totalPrice;
      return total;
    }, 0);

    const total = {
      productQuantity,
      taxValue,
      totalPrice,
      totalCost,
      currencyFormat: "$",
    };

    setTotal(total);
  };

  return {
    total,
    updateCartTotal,
  };
};

export default useCartTotal;
