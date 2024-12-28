// src/components/Authentication.jsx
import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const Authentication = ({ children }) => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      {children}
    </ClerkProvider>
  );
};

export default Authentication;
