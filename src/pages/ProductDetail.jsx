import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import sanityClient from "../sanityClient";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    sanityClient
      .fetch(
        `*[_type == "product" && slug.current == $slug][0]{
          _id,
          title,
          description,
          price,
          "image": image.asset->url
        }`,
        { slug }
      )
      .then((data) => {
        setProduct(data || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {loading ? (
          <p className="text-center text-gray-500 text-xl">Loading...</p>
        ) : !product ? (
          <p className="text-center text-gray-500 text-xl">Product not found</p>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover rounded mb-6"
            />
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold">${product.price}</p>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
