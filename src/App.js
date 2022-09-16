import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import Footer from './components/Footer';
import Checkout from './Checkout';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(item) {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    console.log(newCartItems);
  }
  return (
    <div className="App">
      <HashRouter>
        <Navigation cartItems={cartItems} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} />}
            />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}
