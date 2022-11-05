import { IProduct } from "../../../models";
import { BsCart3 } from "react-icons/bs";
import "./product.scss";
import { useState } from "react";
import { useCart, useMediaQuery } from "../../../hooks";
import { Link } from "react-router-dom";

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { id, sku, title, price, currencyFormat, outOfStock } = product;
  const [hover, setHover] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { addProduct } = useCart();
  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
  };
  return (
    <div className="productContainer" key={id}>
      {outOfStock ? (
        <div className="outOfStock" style={{ opacity: "0.5" }}>
          <span className="outOfStockText">Out of Stock</span>

          <Link to="#!">
            <img
              src={require(`../../../assets/products/${sku}-image.png`)}
              alt={title}
              className="productImg"
            />
          </Link>

          <div className="productInfo">
            <p className="productTitle">{title}</p>
            <b className="productPrice">
              {currencyFormat}
              {price}
            </b>
          </div>
        </div>
      ) : (
        <div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <Link to={`product/${id}`}>
            <img
              src={require(`../../../assets/products/${sku}-image.png`)}
              alt={title}
              className="productImg"
            />
          </Link>
          <div className="productInfo">
            <p className="productTitle">{title}</p>
            <b className="productPrice">
              {currencyFormat}
              {price}
            </b>

            {isDesktop ? (
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
            ) : (
              <div className="mobileBuyButton" onClick={handleAddProduct}>
                <button>Add to Cart</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
