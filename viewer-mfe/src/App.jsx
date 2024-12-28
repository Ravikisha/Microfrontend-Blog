import React from "react";
import ReactDOM from "react-dom/client";
import BlogDetails from "./components/BlogDetails";
import CommentSection from "./components/CommentSection";
const Authentication = React.lazy(() => import("auth_mfe/Authentication"));


import "./index.scss";

const App = () => {
  const blogId = "h1qZcFZsAESn8NEp78aF"; // Replace with dynamic blog ID logic

  return (
    <div>
      <BlogDetails blogId={blogId} />
      <CommentSection blogId={blogId} />
    </div>
  );
};

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<React.Suspense fallback={<div>Loading...</div>}>
  <Authentication>
    <App />
  </Authentication>
</React.Suspense>)