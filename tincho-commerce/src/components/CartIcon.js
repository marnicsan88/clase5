import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartIcon = () => {
  const carrito = <FontAwesomeIcon icon={faShoppingCart} />
  return (
      carrito
  );
}

export default CartIcon;