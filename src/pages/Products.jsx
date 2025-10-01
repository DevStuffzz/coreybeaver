import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import sanityClient from "../sanityClient";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
  .fetch(
    `*[_type == "product"]{
      _id,
      title,
      slug,
      price,
      "image": image.asset->url,
      gumroadUrl
    }`
  )
  .then((data) => {
    setProducts(data);
    setLoading(false);
  })
  .catch((err) => {
    console.error(err);
    setLoading(false);
  });

  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        {loading ? (
          <p className="text-gray-500 text-xl">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-500 text-xl">Coming soon...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
