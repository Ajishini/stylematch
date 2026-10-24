import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Productdetails from './pages/productdetails/Productdetails';
import Checkout from './pages/checkout/Checkout';
import Wishlist from './pages/wishlist/Wishlist';
import Cart from './pages/cart/Cart';
import Payment from './pages/payment/Payment'
import OrderConfirmation from './pages/orderconfirmation/Orderconfirmation'
import Profile from './pages/profile/Profile';

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/product/:id' element={<Productdetails />}/>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    <Route path='/wishlist' element={<Wishlist />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='/profile' element={<Profile />}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Routing