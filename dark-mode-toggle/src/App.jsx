import React from "react";
import ThemeCard from "./components/ThemeCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <ThemeCard title="Mini Dark Mode Challenge" />
    </div>
  );
}

export default App;
