import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks";
import CartProducts from "../Cart/CartProducts";
import "./cartModal.scss";
import { usePaystackPayment } from "react-paystack";

type ModalProps = {
  closeModal: any;
};

const CartModal = ({ closeModal }: ModalProps) => {
  let { products, total, emptyCart } = useCart();

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
    closeModal(false);
    navigate("/");
  };
  const onClose = () => {
    alert("Payment was not successful, window closed.");
    console.log("closed");
    closeModal(false);
    navigate("/cart");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="overlay">
      <div className="cartProductModal">
        <div className="cartModalContainer">
          <div className="cancelButton" onClick={() => closeModal(false)}>
            <MdCancel className="cancelIcon" />
          </div>
          {products?.length ? (
            <>
              <div className="cartModalContent">
                <span className="cartTitle">
                  <b>My Bag, </b>
                  {total.productQuantity} item(s)
                </span>

                <CartProducts products={products} type="simplified" />

                <div className="modalCartFooter">
                  <div className="totalCost">
                    <p className="subPriceValue">
                      Total:{" "}
                      <b>{`${total.currencyFormat} ${total.totalCost}`}</b>
                    </p>
                  </div>
                  <div className="modalButtons">
                    <Link to="cart" onClick={() => closeModal(false)}>
                      <button className="viewButton">VIEW BAG</button>
                    </Link>
                    <button
                      className="checkoutButton"
                      onClick={() => {
                        initializePayment(onSuccess, onClose);
                      }}
                    >
                      ORDER
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="modalEmptyCart">
                <h1>Cart is empty</h1>
                <p>Add some product in the cart</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
