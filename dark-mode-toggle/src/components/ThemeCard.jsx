import React, { useState } from "react";

function ThemeCard({ title }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#f4f4f4",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "300px",
        margin: "50px auto",
        transition: "0.3s ease"
      }}
    >
      <h2>{title}</h2>
      <p>This is a theme toggle card.</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px 15px",
          marginTop: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeCard;
