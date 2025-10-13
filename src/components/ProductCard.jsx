import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const handlePurchase = () => {
    if (!product.gumroadUrl) {
      alert("No Gumroad link available for this product.");
      return;
    }
    window.open(product.gumroadUrl, "_blank", "noopener,noreferrer");
  };

  return (
   <div className="border rounded-lg p-4 hover:shadow-lg transition max-w-xs">
  {/* Square image */}
  <div className="w-full aspect-square mb-4 overflow-hidden rounded">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-cover"
    />
  </div>

  <h2 className="text-xl font-semibold">{product.title}</h2>
  <p className="text-gray-700">${product.price}</p>

  <div className="flex justify-between mt-4 gap-2">
    {/* View Details button */}
    <Link
to={`/products/${product.slug?.current || ""}`}
      className="text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer flex-1"
    >
      View Details
    </Link>

    {/* Purchase button */}
    <button
      onClick={handlePurchase}
      className="text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer flex-1"
    >
      Purchase
    </button>
  </div>
</div>

  );
};

export default ProductCard;
