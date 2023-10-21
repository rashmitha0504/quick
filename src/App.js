import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Login from './pages/Login'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer'
import home_needs_banner from './components/assets/Vegetables.png'
import Accessories_banner from './components/assets/Accessories.png'
import chocolate_banner from './components/assets/Chocolates.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Shop/>}/>
        <Route exact path="/home-needs" element={<ShopCategory banner={home_needs_banner} category="home-needs"/>}/>
        <Route exact path="/accessories" element={<ShopCategory banner={Accessories_banner} category="accessories"/>}/>
        <Route exact path="/sweet-cravings" element={<ShopCategory banner={chocolate_banner} category="sweet-cravings"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App