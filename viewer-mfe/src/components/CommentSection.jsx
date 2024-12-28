import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "@clerk/clerk-react";
import { isAuthenticated } from "../utils/utils";


const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const fetchComments = async () => {
      const querySnapshot = await getDocs(collection(db, `blogs/${blogId}/comments`));
      setComments(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchComments();
  }, [blogId, comments]);

  const handleAddComment = async () => {
    if (!user) {
      alert("You must be logged in to comment.");
      return;
    }

    if (!commentText) {
      alert("Comment text cannot be empty.");
      return;
    }

    try {
      await addDoc(collection(db, `blogs/${blogId}/comments`), {
        text: commentText,
        userId: user.id,
        userEmail: user.primaryEmailAddress?.emailAddress,
        timestamp: serverTimestamp(),
      });

      setCommentText("");
      alert("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment.");
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="border p-4 mt-4 rounded">
          <p>{comment.text}</p>
          <p className="text-sm text-gray-500">
            By: {comment.userEmail || "Anonymous"} on{" "}
            {comment.timestamp?.toDate().toLocaleString()}
          </p>
        </div>
      ))}
      {
        comments.length === 0 && (
          <p className="text-gray-600 mt-4">No comments yet. Be the first to comment!</p>
        )
      }

      {
        !isAuthenticated() && (
          <p className="text-gray-600 mt-4">
            You must be logged in to comment.
          </p>
        )
      }

      {
        isAuthenticated() && (
          <div className="mt-4">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              className="p-2 border w-full"
            ></textarea>
            <button
              onClick={handleAddComment}
              className="px-4 py-2 bg-gray-800 text-white mt-2"
            >
              Post Comment
            </button>
          </div>
        )
      }


    </div>
  );
};

export default CommentSection;
