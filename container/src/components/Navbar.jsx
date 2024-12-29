import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = ({ isAuthenticated }) => {
  return (
    <header className="py-4 bg-white sm:py-5">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex">
            <a href="#" title="" className="flex"><img className="w-auto h-10" src="https://ravikisha.github.io/assets/personalLogo.png" alt="logo" /></a>
          </div>
          <p className="text-base font-bold text-gray-900" style={{ fontFamily: "Poppins" }}
          >Microfrontend Blog</p>
          <div className="hidden md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10 md:flex">
            <Link to="/dashboard" title="" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600">All Blogs</Link>
            {
              isAuthenticated && (
                <Link to="/add" title="" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600">Add Blog</Link>
              )
            }
          </div>
          <div className="flex items-center justify-end bg-black text-white hover:bg-gray-800 p-2 rounded-md">
            <SignedOut>
              <SignInButton mode="modal">Sign In</SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
