"use client";
import "./globals.css";
import React from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Meta from "../Meta/Meta";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Meta />
      <html lang="en">
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
