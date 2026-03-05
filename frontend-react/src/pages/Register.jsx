import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    const data = await registerUser(form);

    setLoading(false);

    if (data.msg === "User registered successfully") {
      setSuccess("Registered successfully! Redirecting...");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      setError(data.msg || "User already exists");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        color: "white",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>📝 Register</h2>

        {error && (
          <p style={{ color: "#f87171", textAlign: "center" }}>
            {error}
          </p>
        )}

        {success && (
          <p style={{ color: "#22c55e", textAlign: "center" }}>
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <input
            placeholder="Username"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            style={{ width: "100%", padding: "8px" }}
          />
          <br /><br />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            style={{ width: "100%", padding: "8px" }}
          />
          <br /><br />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            style={{ width: "100%", padding: "8px" }}
          />
          <br /><br />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "8px",
              background: loading ? "#6b7280" : "#22c55e",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#22c55e", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;