import React from 'react'
import Home from '../components/Home/Home'
import Popular from '../components/Popular/Populaar'
import Offers from '../components/Offers/Offers'
import NewProducts from '../components/NewProducts/NewProducts'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Home/>  
        <Popular/>
        <Offers/>
        <NewProducts/>
        <NewsLetter/>
    </div>
  )
}

export default Shop