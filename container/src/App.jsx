import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { isAuthenticated } from "./utils/utils";

import { useParams } from 'react-router-dom';

import "./index.scss";
import Home from "./components/Home";
const Authentication = React.lazy(() => import("auth_mfe/Authentication"));
const BlogDetails = React.lazy(() => import("viewer_mfe/BlogDetails"));
const CommentSection = React.lazy(() => import("viewer_mfe/CommentSection"));
const BlogForm = React.lazy(() => import("dashboard_mfe/BlogForm"));
const BlogList = React.lazy(() => import("dashboard_mfe/BlogList"));


const App = () => (
  <Router>
    <Navbar isAuthenticated={isAuthenticated()} />
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated()} />} />
        {/* <ProtectedRoute path="/dashboard" element={<BlogList />} /> */}
        <Route path="/dashboard" element={
          <BlogList />
        } />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        {/* <ProtectedRoute path="/blog/:blogId" element={<BlogPage />} /> */}
        {/* <Route path="/add" element={<BlogForm />} /> */}
        <Route path="/add" element={<BlogForm />} />
      </Routes>
    </React.Suspense>
  </Router>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<React.Suspense fallback={<div>Loading...</div>}>
  <Authentication>
    <App />
  </Authentication>
</React.Suspense>)

function BlogPage() {
  const { blogId } = useParams();
  return (
    <div>
      <BlogDetails blogId={blogId} />
      <CommentSection blogId={blogId} />
    </div>
  )
}