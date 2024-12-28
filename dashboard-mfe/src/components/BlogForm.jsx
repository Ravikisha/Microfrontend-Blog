import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "@clerk/clerk-react";

const BlogForm = () => {
  const isAuthenticated = !!useUser().isSignedIn;
  if (!isAuthenticated) {
    return <p>You must be signed in to create a blog.</p>;
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
    <form onSubmit={handleSubmit} className="p-4 border">
      <h2 className="text-xl font-bold mb-4">Create Blog</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border w-full"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white">
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
