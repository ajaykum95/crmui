import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const TopBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Update body styles for dark mode
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#333" : "#f4f4f4";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "230px", // Adjust to fit your existing sidebar width
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: darkMode ? "#444" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "60px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      {/* Title or Logo */}
      <h1 style={{ margin: 0 }}>CRM Dashboard</h1>

      {/* Search Bar */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: darkMode ? "#555" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />
        <button
          style={{
            padding: "8px 12px",
            marginLeft: "5px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: darkMode ? "#666" : "#ddd",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          🔍
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <div onClick={toggleDarkMode} style={{ cursor: "pointer", fontSize: "20px" }}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  );
};

export default TopBar;
