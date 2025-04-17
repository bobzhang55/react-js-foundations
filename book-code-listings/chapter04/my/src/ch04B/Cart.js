import React from "react";
import CartItems from "./CartItems.js";
import DisplayTotal from "./DisplayTotal.js";
import CheckoutButton from "./CheckoutButton.js";
import styles from "./Cart.css.js";

function Cart(props) {
  return (
    <>
      <div style={styles.cart}>
        <h2>Cart</h2>

        <CartItems items={props.inCart} />

        <DisplayTotal items={props.inCart} />

        <CheckoutButton />
      </div>

    </>
  );
}

export default Cart;
