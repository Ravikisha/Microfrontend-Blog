import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Authentication = React.lazy(() => import("auth_mfe/Authentication"));
import "./index.scss";
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

const App = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
    <BlogForm />
    <BlogList />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<React.Suspense fallback={<div>Loading...</div>}>
  <Authentication>
  <Router>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={
          <App />
        } />
      </Routes>
    </React.Suspense>
  </Router>
  </Authentication>
</React.Suspense>)