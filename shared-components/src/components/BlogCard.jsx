import React from "react";

const BlogCard = ({ title, content, author, timestamp, onClick }) => {
  return (
    <div
      className="border p-4 rounded hover:shadow-md cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">
        By: {author || "Anonymous"} on {new Date(timestamp).toLocaleString()}
      </p>
      <p className="mt-2 text-gray-700">{content.slice(0, 100)}...</p>
    </div>
  );
};

export default BlogCard;
