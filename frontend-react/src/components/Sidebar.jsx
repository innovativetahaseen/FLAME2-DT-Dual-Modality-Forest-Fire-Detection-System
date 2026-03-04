import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DetectionContext } from "../context/DetectionContext";

function Sidebar() {
  const { detected } = useContext(DetectionContext);

  const linkStyle = ({ isActive }) => ({
    color: "white",
    textDecoration: "none",
    padding: "12px 15px",
    borderRadius: "10px",
    background: isActive
      ? "linear-gradient(90deg, #1e293b, #0f172a)"
      : "transparent",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });

  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "linear-gradient(180deg, #0f172a, #111827)",
        boxShadow: "4px 0 25px rgba(0,0,0,0.7)",
        color: "white",
        padding: "25px 20px",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          fontSize: "22px",
          letterSpacing: "1px",
        }}
      >
        🔥 FLAME2
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <NavLink to="/" style={linkStyle}>
          🏠 Dashboard
        </NavLink>

        <NavLink to="/detection" style={linkStyle}>
          📷 Detection
        </NavLink>

        {/* 🔥 Results with Glow Effect */}
        <NavLink
          to="/results"
          style={({ isActive }) => ({
            ...linkStyle({ isActive }),
            background: detected
              ? "#1e40af"
              : isActive
              ? "linear-gradient(90deg, #1e293b, #0f172a)"
              : "transparent",
            boxShadow: detected
              ? "0 0 15px #3b82f6"
              : "none",
          })}
        >
          📊 Results
        </NavLink>

        <NavLink to="/about" style={linkStyle}>
          ℹ️ About
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;