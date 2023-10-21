import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const {all_items}=useContext(ShopContext)

  console.log('Received:',props);
  console.log('All: ',all_items)

  return (
    <div className='shop-category'>
      <img src={props.banner} className='banner' alt=""/>
      <div className="shopcategory-indexsort">
        <p>
          <span>
            Showing 1-12
          </span> out of 36 Items
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_items.map((item,i)=>{
          const imageClass=`item-image-${item.id}`;
          if(props.category===item.category){
            return <Item key={i} id={item.id}
            name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price} imageClass={imageClass} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        ExploreMore
      </div>

    </div>
  )
}

export default ShopCategory