// src/utils/authUtils.js
import { useUser } from "@clerk/clerk-react";

export const getCurrentUser = () => {
  const { user } = useUser();
  return user;
};

export const isAuthenticated = () => !!useUser().isSignedIn;
