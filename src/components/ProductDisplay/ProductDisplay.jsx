import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'



const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="product-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-image">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-right-price">
                <div className='prices'>
                <div className="product-right-price-old">
                    {product.old_price}
                </div>
                <div className="product-right-price-new">
                    {product.new_price}
                </div>
                </div>
                <div className="product-right-description">
                    Fresh Product and On time delivery available
                </div>
                <div className="product-right-sizes">
                    <h1>Select Quantity</h1>
                    <div className="product-right-size">
                        <div>250gm</div>
                        <div>500gm</div>
                        <div>750gm</div>
                        <div>1 KG</div>
                        <div>2 KG</div>
                    </div>
                </div>
                <button className='product-add-btn' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="product-right-category">
                    <span>
                        Category :
                    </span>
                    Home Needs , Dal, Potato
                </p>
                <p className="product-right-category">
                    <span>
                        Category :
                    </span>
                    Fresh , stored
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay