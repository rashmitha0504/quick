import React, { createContext, useState } from 'react';
import all_items from '../components/assets/all_items';

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {};
  for (let index = 0; index < all_items.length; index++) {
    cart[all_items[index].id] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updatedCart); 
      return updatedCart;
    });
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const getTotalAMount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_items.find((product) => product.id === Number(item));
        total += itemInfo.new_price * cartItems[item];
      }
    }
    return total; 
  };
  
  
    const getTotalCartItems=()=>{
      let totalItem=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          totalItem+=cartItems[item]
        }
      }
      return totalItem
    }

  const contextValue = {getTotalCartItems,getTotalAMount, all_items, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
