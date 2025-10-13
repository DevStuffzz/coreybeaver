import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // adjust number of posts per page

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          _id,
          title,
          slug,
          author,
          excerpt,
          publishedAt,
          "mainImage": mainImage.asset->url
        }`
      )
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter posts by search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort posts by published date
  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    } else {
      return new Date(a.publishedAt) - new Date(b.publishedAt);
    }
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {/* Search and sort */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {loading ? (
        <p className="text-gray-500 text-xl">Loading...</p>
      ) : sortedPosts.length === 0 ? (
        <p className="text-gray-500 text-xl">No posts found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <div
                key={post._id}
                className="border rounded-lg p-4 hover:shadow-lg transition max-w-xs mx-auto"
              >
                {/* Square image */}
                <div className="w-full aspect-square mb-4 overflow-hidden rounded">
                  {post.mainImage && (
                    <img
                      src={post.mainImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-500 text-sm">
                  {new Date(post.publishedAt).toDateString()} — {post.author}
                </p>
                <p className="text-gray-700 mt-2 line-clamp-3">{post.excerpt}</p>

                <div className="flex justify-between mt-4 gap-2">
                  <Link
                    to={`/blog/${post.slug.current}`}
                    className="text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer flex-1"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-3 py-1 border rounded ${
                  number === currentPage ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
