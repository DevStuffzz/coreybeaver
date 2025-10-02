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
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
