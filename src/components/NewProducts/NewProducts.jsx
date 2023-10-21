import React from 'react'
import './NewProducts.css'
import new_products from '../assets/new_collections'
import Item from '../Item/Item'

const NewProducts = () => {
  return (
    <div className='new-products'>
        <h1>New Arrivals</h1>
        <hr/>
        <div className="collections">
            {new_products.map((item,i)=>{
                const imageClass=`item-image-${item.id}`;
                return (
                    <Item key={i} id={item.id}
                    name={item.name} image={item.image}
                    new_price={item.new_price} old_price={item.old_price} imageClass={imageClass}/>
                );
            })}
        </div>
    </div>
  )
}

export default NewProducts