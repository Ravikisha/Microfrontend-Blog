import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const BlogDetails = ({ blogId }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, "blogs", blogId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data());
      } else {
        console.error("No such document!");
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-600 mt-2">By: {blog.userEmail || "Anonymous"}</p>
      <p className="text-gray-500 mt-1">
        Posted on: {blog.timestamp?.toDate().toLocaleString()}
      </p>
      <div className="mt-4">{blog.content}</div>
    </div>
  );
};

export default BlogDetails;
