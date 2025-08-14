import React from "react";
import { Outlet } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./contexts/AutoContext";

export default function Root() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "";

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <Header />
          <main className="flex-1 pt-16">
            <Outlet />
          </main>
        </AuthProvider>
      </GoogleOAuthProvider>
    </div>
  );
}
