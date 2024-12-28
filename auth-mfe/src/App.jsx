import React from "react";
import ReactDOM from "react-dom/client";


import "./index.scss";
import Header from "./components/Header";
import Authentication from "./components/Authentication";

// Import your publishable key
const PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
function App() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1>Welcome to the Microfrontend Blog</h1>
        <p>Build your blog microfrontends with modularity!</p>
      </main>
    </div>
  );
}
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Authentication>
    <App />
  </Authentication>
);
