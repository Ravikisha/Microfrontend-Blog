import React from "react";
import ReactDOM from "react-dom/client";
const Authentication = React.lazy(() => import("auth_mfe/Authentication"));
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogCard from "./components/BlogCard";


import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <Footer />
    <BlogCard title="Hello World" content= "This is the content part" author="Ravi Kishan" timestamp = '24-11-2024 12:30:30'/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<React.Suspense fallback={<div>Loading...</div>}>
  <Authentication>
    <App />
  </Authentication>
</React.Suspense>)