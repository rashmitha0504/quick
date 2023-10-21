import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

import './CartItem.css'

import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalAMount, all_items, cartItems, removeFromCart } = useContext(ShopContext);
    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_items.map((e) => {
        if (cartItems[e.id] > 0) {
            return (
                <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>Rs.{e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>Rs.{e.new_price * cartItems[e.id]}</p>
                        <img className='cart-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                    </div>
                    <hr />
                </div>
            )
        }
        return null;
    })}
    <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>Rs.{getTotalAMount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>Rs.{getTotalAMount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo card, Enter it here</p>
            <div className="cartItem-promobox">
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CartItems;