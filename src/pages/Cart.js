import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
