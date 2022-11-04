import useCartProducts from "./useCartProducts";
import useCartTotal from "./useCartTotal";

const useCart = () => {
  const {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    emptyCart,
  } = useCartProducts();
  const { total, updateCartTotal } = useCartTotal();

  return {
    emptyCart,
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    total,
    updateCartTotal,
  };
};

export default useCart;
