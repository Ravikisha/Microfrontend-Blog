import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Markdown from 'react-markdown'

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
        fontFamily: '"Poppins", sans-serif',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '32px auto',
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
          color: '#222',
          marginBottom: '4px',
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <img src={blog.userImageUrl} alt="User" style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '8px' }} />
        <span>{blog.userName}</span>
      </p>
      <p
        style={{
          color: '#aaa',
          fontSize: '0.9rem',
          marginBottom: '16px',
        }}
      >
        {/* Posted on: 18 Nov 2021 */}
        Posted on: {blog.timestamp?.toDate().toDateString()}
      </p>
      <Markdown
        style={{
          color: '#555',
          backgroundColor: '#fff',
          padding: '16px',
          borderRadius: '4px',
          border: '1px solid #e0e0e0'
        }}
        className="markdown-container"
      >
        {blog.content}
      </Markdown>
    </div>

  );
};

export default BlogDetails;
