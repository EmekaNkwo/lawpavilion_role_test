import { useNavigate } from "react-router-dom";
import { CartProducts } from "../../components";

import { useCart } from "../../hooks";
import { usePaystackPayment } from "react-paystack";
import "./cart.scss";

const Cart = () => {
  const { products, total, emptyCart } = useCart();

  const navigate = useNavigate();

  const config = {
    reference: new Date().getTime().toString(),
    email: "emekankwo49@gmail.com",
    amount: total.totalCost * 100,
    publicKey: "pk_test_f3b114a6349b78cccd1f34c644b44eb97bc4c7f9",
  };
  const onSuccess = (reference: void) => {
    alert("Payment Successful! ");
    emptyCart();
    console.log(reference);

    navigate("/");
  };
  const onClose = () => {
    alert("Payment was not successful, window closed.");
    console.log("closed");
    navigate("/");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="cartContainer">
      {products?.length ? (
        <>
          <div className="cartContent">
            <span className="cartTitle">Cart</span>

            <CartProducts products={products} type="" />

            <div className="cartFooter">
              <p className="sub">
                Tax 21%: {""}
                <b>
                  {total.currencyFormat}
                  {total.taxValue}
                </b>
              </p>
              <p className="sub">
                Quantity: <b>{total.productQuantity} </b>
              </p>
              <div className="totalCost">
                <p className="subPriceValue">
                  Total: <b>{`${total.currencyFormat} ${total.totalCost}`}</b>
                </p>
              </div>
              <button
                className="checkoutButton"
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
                autoFocus
              >
                ORDER
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="emptyCart">
            <h1>Cart is empty</h1>
            <p>Add some product in the cart</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
