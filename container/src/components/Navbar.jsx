import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">
        <Link to="/">My Blog App</Link>
      </div>
      {
        isAuthenticated && (
          <div className="space-x-4">
            <Link to="/" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/add" className="hover:underline">
              Add Blog
            </Link>
          </div>
        )
      }

      <div>
        <SignedOut>
          <SignInButton mode="modal">Sign In</SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
