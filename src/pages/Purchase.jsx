import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import sanityClient from "../sanityClient";

const Purchase = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  sanityClient
    .fetch(
      `*[_type == "product" && slug.current == $slug][0]{
        title,
        price,
        "image": image.asset->url
      }`,
      { slug }
    )
    .then((data) => {
      if (!data) {
        console.error("Product not found!");
      }
      setProduct(data);
    })
    .catch(console.error);
}, [slug]);


  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // redirect to Stripe Checkout
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded mb-6"
        />
        <p className="text-xl font-semibold">${product.price}</p>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition"
        >
          {loading ? "Redirecting..." : "Proceed to Checkout"}
        </button>
      </div>
    </>
  );
};

export default Purchase;
