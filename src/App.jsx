import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
// @ts-ignore
import Home from './pages/Home';
// @ts-ignore
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Youtube from './pages/Youtube';
import Legal from './pages/Legal';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<Youtube />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
