import { IProduct } from "../../../models";
import { BsCart3 } from "react-icons/bs";
import "./product.scss";
import { useState } from "react";
import { useCart } from "../../../hooks";

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { id, sku, title, price, currencyFormat, outOfStock } = product;
  const [hover, setHover] = useState(false);

  const { addProduct } = useCart();
  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
  };
  return (
    <div className="productContainer" key={id}>
      {outOfStock ? (
        <div className="outOfStock" style={{ opacity: "0.5" }}>
          <span className="outOfStockText">Out of Stock</span>
          <a href="#!">
            <img
              src={require(`../../../assets/products/${sku}-image.png`)}
              alt={title}
              className="productImg"
            />
          </a>
          <p className="productTitle">{title}</p>
          <b className="productPrice">
            {currencyFormat}
            {price}
          </b>
        </div>
      ) : (
        <div
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <a href={`product/${id}`}>
            <img
              src={require(`../../../assets/products/${sku}-image.png`)}
              alt={title}
              className="productImg"
            />
          </a>
          <p className="productTitle">{title}</p>
          <b className="productPrice">
            {currencyFormat}
            {price}
          </b>
          <button
            className="buyButton"
            style={{
              display: hover ? "block" : "none",
              transition: "all 0.5s",
            }}
            onClick={handleAddProduct}
          >
            <BsCart3 />
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
