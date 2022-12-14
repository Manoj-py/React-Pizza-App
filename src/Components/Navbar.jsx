import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../pages/CartContext";

const Navbar = () => {
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };

  const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="container mx-auto flex items-centre justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="images/logo.png" alt="logo" />
        </Link>
        <ul className="flex items-centre">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span>{cart.totalitems ? cart.totalitems : "0"}</span>
                <img
                  className="ml-2"
                  src="images/cart.png"
                  alt="cart-icon"
                ></img>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
