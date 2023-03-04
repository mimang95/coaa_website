import React, {createContext, useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About';
import Footer from './Components/Footer/Footer';
import Agb from './pages/AGB';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import ItemPage from './pages/ItemPage';
import ShoppingCart from './pages/ShoppingCart';


export const CartItemsContext = createContext<any>(null)


function App() {
  const [cartItems, setCartItems] = useState(null)
  return (
    <CartItemsContext.Provider value={{cartItems, setCartItems}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
        <Route path='/agb' element={<Agb />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/store/eoc-bundle' element=
        {<ItemPage 
            title='EOC-Bundle(T-Shirt + Vinyl)' 
            price='38.00€' 
            src='/images/eoc-bundle.png'
            size={["XS", "S", "M", "L", "XL", "XXL"]} />} />
        <Route path='/store/eoc-shirt' element=
        {<ItemPage 
          title='EOC T-Shirt' 
          price='22.00€' 
          src='/images/eoc-shirt.png'
          size={["XS", "S", "M", "L", "XL", "XXL"]} />} />
        <Route path='/store/eoc-vinyl' element=
        {<ItemPage 
          title='EOC-Vinyl EP' 
          price='20.00€' 
          src='/images/eoc-vinyl.png' />} />
        <Route path='/store/basic-shirt' element=
        {<ItemPage 
          title='Basic Shirt(Logo) - Unisex' 
          price='20.00€' 
          src='/images/basic-shirt.jpg'
          size={["XS", "S", "M", "L", "XL", "XXL"]} />} />
        <Route path='/store/cak-shirt-damen' element=
        {<ItemPage 
          title='T-Shirt Captains and Kings (Frauen)' 
          price='15.00€' 
          src='/images/cak-shirt-damen.jpg'
          size={["S", "M", "L", "XL"]} />} />
        <Route path='/store/cak-shirt-herren' element=
        {<ItemPage 
          title='T-Shirt Captains and Kings (Herren)' 
          price='15.00€' 
          src='/images/cak-shirt-herren.jpg'
          size={["XS", "S", "M", "L"]} />} />
        <Route path='/store/cak-album' element=
        {<ItemPage 
          title='Album "Captains and Kings"' 
          price='10.00€' 
          src='/images/cak-album.jpg' />} />
          <Route path='/shopping-cart' element={<ShoppingCart price='3.00€' />} />
      </Routes>
      <Footer />
    </CartItemsContext.Provider>
  );
}

export default App;
