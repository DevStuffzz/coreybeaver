import React from 'react';
import { Routes, Route } from 'react-router-dom'; // <-- important!
import Navbar from './components/Navbar';

// @ts-ignore
import Home from './pages/Home';
// @ts-ignore
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Purchase from "./pages/Purchase"
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/purchase/:slug" element={<Purchase />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
