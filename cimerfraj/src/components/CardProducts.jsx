import React from 'react'
import CartItem from './CartItem';

export const CardProducts = ({cartProducts}) => {
    console.log(cartProducts);
  return cartProducts.map((cartProduct)=>
    <CartItem key={cartProduct.id} product={cartProduct}/>
  )
}

export default CardProducts
