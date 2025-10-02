import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {loading ? (
        <p className="text-gray-500 text-xl">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500 text-xl">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
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
                {/* Read more button */}
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
      )}
    </div>
  );
};

export default Blog;
