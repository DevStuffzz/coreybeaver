import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import sanityClient from "../sanityClient";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [typeFilter, setTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // ✅ Detect dev mode
  const isDev = typeof window !== "undefined" && window.location.hostname === "localhost";

  // ✅ Generate placeholder data in dev mode
  const generatePlaceholderProducts = (count = 50) => {
    const placeholders = [];
    for (let i = 1; i <= count; i++) {
      placeholders.push({
        _id: `placeholder-${i}`,
        title:
          i % 2 === 0
            ? `Song ${i} Multitrack`
            : `Song ${i} Chord Chart`,
        price: (Math.random() * 40 + 5).toFixed(2),
        _createdAt: new Date(
          Date.now() - Math.random() * 10000000000
        ).toISOString(),
        image: `https://picsum.photos/seed/${i + 1}/500/500`,
        gumroadUrl: "#",
      });
    }
    return placeholders;
  };

  useEffect(() => {
    if (isDev) {
      // Use placeholders locally
      setProducts(generatePlaceholderProducts());
      setLoading(false);
    } else {
      // Fetch from Sanity in production
      sanityClient
        .fetch(
          `*[_type == "product"] | order(_createdAt desc){
            _id,
            title,
            slug,
            price,
            _createdAt,
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
    }
  }, [isDev]);

  // 🔍 Filter by search term
  const filteredBySearch = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🎵 Filter by type
  const filteredByType = filteredBySearch.filter((product) => {
    if (typeFilter === "all") return true;
    if (typeFilter === "multitrack")
      return product.title.toLowerCase().includes("multitrack");
    if (typeFilter === "chordchart" || typeFilter === "chord chart")
      return product.title.toLowerCase().includes("chord chart");
    return true;
  });

  // 🔢 Sort
  const sortedProducts = [...filteredByType].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "oldest":
        return new Date(a._createdAt) - new Date(b._createdAt);
      case "newest":
      default:
        return new Date(b._createdAt) - new Date(a._createdAt);
    }
  });

  // 🧭 Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, typeFilter, sortOption]);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg"
          />

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full md:w-1/4 p-2 border border-gray-300 rounded-lg"
          >
            <option value="all">All Types</option>
            <option value="multitrack">Multitrack</option>
            <option value="chordchart">Chord Chart</option>
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full md:w-1/4 p-2 border border-gray-300 rounded-lg"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="name-asc">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
            <option value="price-asc">Price (Low → High)</option>
            <option value="price-desc">Price (High → Low)</option>
          </select>
        </div>

        {/* Results */}
        {loading ? (
          <p className="text-gray-500 text-xl">Loading...</p>
        ) : currentProducts.length === 0 ? (
          <p className="text-gray-500 text-xl">No products found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border rounded-lg ${
                    currentPage === index + 1
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Products;
