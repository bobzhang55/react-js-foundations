import React, { useState } from "react";
import styles from "../ch04B/Cart.css.js";

function Cart(props) {
  const [inCartItems, setInCart] = useState(props.inCart);

  const removeFromCart = (item) => {
    const index = inCartItems.indexOf(item);
    const newCart = [...inCartItems.slice(0, index), ...inCartItems.slice(index + 1)];
    setInCart(newCart);
  };

  const calculatedTotal = inCartItems.reduce(
    (accumulator, item) => accumulator + (item.price || 0),
    0
  );

  let ItemList = inCartItems.map((item) => {
    return (
      <div key={item.id}>
        {item.id}  ----   {item.title}   ----   {item.price}
        <button
          onClick={() => {
            removeFromCart(item);
          }}
        >
          remove
        </button>
      </div>
    );
  });

  return (
    <>
      <div style={styles.cart}>
        <h2>Cart</h2>

        {ItemList}

        <p>total: ${calculatedTotal}</p>

        <button>Checkout</button>
      </div>

    </>
  );
}

// Cart.defaultProps = {
//   inCart: [{ id: 1, title: "React JS Foundations", price: 5 }],
// };

export default Cart;
