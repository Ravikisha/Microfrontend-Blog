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
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment.");
    }
  };

  return (
    <div style={{ 
      marginTop: '24px',
      padding: '32px',
      fontFamily: '"Arial", sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: '32px auto',
      lineHeight: '1.6',
     }}>
      <h2
        style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '16px',
        }}
      >
        Comments
      </h2>

      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            border: '1px solid #e0e0e0',
            padding: '16px',
            marginTop: '16px',
            borderRadius: '8px',
            backgroundColor: '#fff',
          }}
        >
          <p style={{ color: '#555', fontSize: '1rem' }}>{comment.text}</p>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#888',
              marginTop: '8px',
            }}
          >
            By: {comment.userEmail || 'Anonymous'} on{' '}
            {comment.timestamp?.toDate().toLocaleString()}
          </p>
        </div>
      ))}

      {comments.length === 0 && (
        <p
          style={{
            color: '#555',
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          No comments yet. Be the first to comment!
        </p>
      )}

      {!isAuthenticated() && (
        <p
          style={{
            color: '#555',
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          You must be logged in to comment.
        </p>
      )}

      {isAuthenticated() && (
        <div style={{ marginTop: '16px' }}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            style={{
              padding: '12px',
              border: '1px solid #e0e0e0',
              width: '100%',
              borderRadius: '8px',
              fontSize: '1rem',
              color: '#333',
              marginBottom: '12px',
            }}
          ></textarea>
          <button
            onClick={handleAddComment}
            style={{
              padding: '8px 16px',
              backgroundColor: '#333',
              color: '#fff',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Post Comment
          </button>
        </div>
      )}
    </div>

  );
};

export default CommentSection;
