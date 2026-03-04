import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #1e293b, #0f172a)",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>
        Dual Modality Forest Fire Detection System
      </h3>

      <div>
        {!token ? (
          <>
            <button
              onClick={() => navigate("/login")}
              style={{
                marginRight: "10px",
                padding: "6px 14px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              padding: "6px 14px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;