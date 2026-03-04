import "./Detection.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { detectFire } from "../services/api";
import { DetectionContext } from "../context/DetectionContext";

function Detection() {
  const [rgbFile, setRgbFile] = useState(null);
  const [thermalFile, setThermalFile] = useState(null);
  const [rgbPreview, setRgbPreview] = useState(null);
  const [thermalPreview, setThermalPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const context = useContext(DetectionContext);
  const navigate = useNavigate();

  const handleDetect = async () => {
    if (!rgbFile && !thermalFile) {
      alert("Please upload at least one image");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    if (rgbFile) formData.append("rgb_image", rgbFile);
    if (thermalFile) formData.append("thermal_image", thermalFile);

    let data;

    try {
      data = await detectFire(formData);
    } catch (error) {
      setLoading(false);
      alert("Server error. Please try again.");
      return;
    }

    setLoading(false);

    // Sidebar glow effect
    if (data?.fire_detected) {
      context?.setDetected(true);

      setTimeout(() => {
        context?.setDetected(false);
      }, 3000);
    }

    // Navigate to results with data
    navigate("/results", {
      state: {
        confidence: data?.confidence ?? 0,
        fire: data?.fire_detected ?? false,
        rgbImage: rgbPreview,
        thermalImage: thermalPreview,
      },
    });
  };

  return (
    <div className="detection-container">
      <h1>📷 Fire Detection</h1>

      <div className="upload-section">
        <div className="upload-card">
          <h3>RGB Image</h3>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;
              setRgbFile(file);
              setRgbPreview(URL.createObjectURL(file));
            }}
          />
          {rgbPreview && <img src={rgbPreview} alt="RGB" />}
        </div>

        <div className="upload-card">
          <h3>Thermal Image</h3>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;
              setThermalFile(file);
              setThermalPreview(URL.createObjectURL(file));
            }}
          />
          {thermalPreview && <img src={thermalPreview} alt="Thermal" />}
        </div>
      </div>

      <button
        className="detect-btn"
        onClick={handleDetect}
        disabled={loading}
      >
        {loading ? "Detecting..." : "Detect Fire"}
      </button>
    </div>
  );
}

export default Detection;