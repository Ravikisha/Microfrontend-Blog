// src/components/Header.jsx
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Microfrontend Blog</div>
      <div>
        <SignedOut>
          <SignInButton mode="modal">Sign In</SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
