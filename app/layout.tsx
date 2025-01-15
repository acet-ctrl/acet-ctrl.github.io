"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/topBar";
import NavBar from "@/components/navBar";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isNavBarShown, setIsNavBarShown] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>AwesBooth</title>
        <meta name="description" content="Acetbug's personal website" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body style={{ margin: 0, height: "100%", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TopBar />
          {children}
        </div>
        <NavBar
          translateX={isNavBarShown ? "0" : "-100%"}
          width={isCompact ? "100%" : "200px"}
        />
        <button
          style={{ position: "absolute", top: 0, left: 0 }}
          onClick={() => setIsNavBarShown(!isNavBarShown)}
        >
          ☰
        </button>
      </body>
    </html>
  );
}
