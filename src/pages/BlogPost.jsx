import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../sanityClient";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

// Build image URLs from Sanity
const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          slug,
          author,
          publishedAt,
          body,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`,
        { slug }
      )
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!post) return <p className="text-center text-red-500">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Back to Blog */}
      <Link
        to="/blog"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Meta info */}
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.publishedAt).toLocaleDateString()} — {post.author}
      </p>

      {/* Featured image */}
      {post.mainImage?.asset?.url && (
  <img
    src={post.mainImage.asset.url} 
    alt={post.mainImage.alt || post.title}
    className="w-full object-contain rounded mb-6"
  />
)}



      {/* Blog content */}
      <div className="prose prose-lg max-w-none">
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
