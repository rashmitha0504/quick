import React from 'react'
import './RelatedProducts.css'
import data_product from '../assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className="related-product-items">
            {data_product.map((item,i)=>{
                const imageClass=`item-image-${item.id}`;
                return <Item key={i} id={item.id}
                name={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price} imageClass={imageClass}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts