import "./navbar.scss";
import { BsCart3 } from "react-icons/bs";
import { LOGO } from "../../assets";
import { useCart } from "../../hooks";
import { useState } from "react";
import CartModal from "../CartModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { products } = useCart();
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="navBar">
      <div className="navLeft">
        <ul className="navList">
          <li className="navItem">
            <a href="/" className="navLink active">
              WOMEN
            </a>
          </li>
          <li className="navItem">
            <a href="#!" className="navLink">
              MEN
            </a>
          </li>
          <li className="navItem">
            <a href="#!" className="navLink ">
              KIDS
            </a>
          </li>
        </ul>
      </div>
      <div className="navLogo">
        <Link to="/">
          <img src={LOGO} alt="header_logo" />
        </Link>
      </div>
      <div className="navRight">
        <div className="currencyIcon">
          <select>
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
            <option value="GBP">¥ JPY</option>
          </select>
        </div>
        <div className="cartIcon">
          <span onClick={() => setOpenModal(true)}>
            <BsCart3 />
          </span>

          <div className="cartPopUp">
            {openModal && <CartModal closeModal={setOpenModal} />}
          </div>

          <span className="cartQuantity">{products.length}</span>
        </div>
        <div className="mobileCartIcon">
          <Link to="cart">
            <span>
              <BsCart3 />
            </span>
          </Link>
          <span className="cartQuantity">{products.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
