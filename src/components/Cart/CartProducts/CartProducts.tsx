import { ICartProduct } from "../../../models";
import CartProduct from "./CartProduct";
import "./cartProducts.scss";
import MiniCartProduct from "./MiniCartProduct";

interface IProps {
  products: ICartProduct[];
  type: string;
}

const CartProducts = ({ products, type }: IProps) => {
  return (
    <div className="cartProductsContainer">
      {type !== "simplified" ? (
        <>
          {products.map((product) => (
            <CartProduct key={product.sku} product={product} />
          ))}
        </>
      ) : (
        <>
          {products.map((product) => (
            <MiniCartProduct key={product.sku} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default CartProducts;
