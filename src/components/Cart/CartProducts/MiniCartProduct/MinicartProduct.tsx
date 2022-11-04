import { ICartProduct } from "../../../../models";

import { useCart } from "../../../../hooks";
// import { MdCancel } from "react-icons/md";
import "./miniCartProduct.scss";

interface IProps {
  product: ICartProduct;
}
const CartProduct = ({ product }: IProps) => {
  const { increaseProductQuantity, decreaseProductQuantity } = useCart();
  const { sku, title, price, currencyFormat, availableSizes, quantity } =
    product;

  // const handleRemoveProduct = () => removeProduct(product);
  const handleIncreaseProductQuantity = () => increaseProductQuantity(product);
  const handleDecreaseProductQuantity = () => decreaseProductQuantity(product);

  return (
    <>
      <div className="miniCartProductContainer">
        <div className="cartProductInfo">
          {/* <MdCancel
            onClick={handleRemoveProduct}
            className="cartDeleteButton"
          /> */}

          <div className="cartDetail">
            <div className="cartDetailTitle">
              <b>{title.split(" ")[0]}</b> <br />
              {title.split(" ").splice(1, title.length).join(" ")}
            </div>
            <div className="cartPrice">
              <b>{`${currencyFormat}  ${price}  `}</b>
            </div>

            <div className="cartSizes">
              <b className="cartLabels">SIZE:</b>
              <div className="selectors">
                {availableSizes.map((size) => {
                  return (
                    <>
                      <label>
                        <input type="checkbox" />
                        <span className="checkmark">{size}</span>
                      </label>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="cartColors">
              <b className="cartLabels">COLORS:</b>
              <div className="selectors">
                {product?.colors.map((color) => {
                  return (
                    <>
                      <label>
                        <input type="checkbox" />
                        <span
                          className="checkmark"
                          style={{ backgroundColor: `${color}` }}
                        ></span>
                      </label>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="cartRight">
          <div className="quantityControl">
            <button
              onClick={handleDecreaseProductQuantity}
              disabled={quantity === 1 ? true : false}
              className="changeQuantity"
            >
              -
            </button>
            {quantity}
            <button
              onClick={handleIncreaseProductQuantity}
              className="changeQuantity"
            >
              +
            </button>
          </div>
          <div className="rightImg">
            <img
              src={require(`../../../../assets/products/${sku}-image.png`)}
              alt={title}
              className="cartImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
