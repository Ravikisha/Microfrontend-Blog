import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "@clerk/clerk-react";
import NoAuth from "./NoAuth";


const BlogForm = () => {
  const isAuthenticated = !!useUser().isSignedIn;
  if (!isAuthenticated) {
    return <NoAuth />;
  }
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be signed in to create a blog.");
      return;
    }

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        userId: user.id, // Store user ID
        userEmail: user.primaryEmailAddress?.emailAddress, // Optional: Store email
        timestamp: serverTimestamp(), // Firestore server time
      });

      setTitle("");
      setContent("");
      alert("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create the blog.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      padding: '2rem',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '2rem auto',
      backgroundColor: '#fff'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        color: '#111827',
        textAlign: 'center',
      }}>
        Create Blog
      </h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          marginBottom: '0.5rem',
          color: '#111827'
        }}>
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: '0.75rem',
            border: '1px solid #E5E7EB',
            width: '100%',
            borderRadius: '8px',
            fontSize: '1rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s ease',
          }}
          placeholder="Enter blog title"
          onFocus={(e) => e.target.style.boxShadow = '0 4px 6px rgba(0, 123, 255, 0.25)'}
          onBlur={(e) => e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          marginBottom: '0.5rem',
          color: '#111827'
        }}>
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            padding: '0.75rem',
            border: '1px solid #E5E7EB',
            width: '100%',
            borderRadius: '8px',
            fontSize: '1rem',
            minHeight: '180px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s ease',
          }}
          placeholder="Write your content here"
          onFocus={(e) => e.target.style.boxShadow = '0 4px 6px rgba(0, 123, 255, 0.25)'}
          onBlur={(e) => e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563EB',
          color: '#fff',
          fontWeight: '600',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
          width: '100%',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1D4ED8'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2563EB'}
        onClick={(e) => e.target.style.transform = 'scale(1.05)'}
        onTransitionEnd={(e) => e.target.style.transform = 'scale(1)'}
      >
        Submit
      </button>
    </form>

  );
};

export default BlogForm;
