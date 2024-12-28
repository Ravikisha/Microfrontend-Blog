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
    <div
  style={{
    padding: '32px',
    fontFamily: '"Arial", sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '32px auto',
    lineHeight: '1.6',
  }}
>
  <h1
    style={{
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#333',
    }}
  >
    {blog.title}
  </h1>
  <p
    style={{
      color: '#888',
      marginBottom: '4px',
      fontStyle: 'italic',
    }}
  >
    By: {blog.userEmail || 'Anonymous'}
  </p>
  <p
    style={{
      color: '#aaa',
      fontSize: '0.9rem',
      marginBottom: '16px',
    }}
  >
    Posted on: {blog.timestamp?.toDate().toLocaleString()}
  </p>
  <div
    style={{
      color: '#555',
      fontSize: '1rem',
      lineHeight: '1.8',
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '4px',
      border: '1px solid #e0e0e0',
    }}
  >
    {blog.content}
  </div>
</div>

  );
};

export default BlogDetails;
