"use client";

import { useState } from "react";
import { AuthContext } from "../contexts/index";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
