import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();

  const confidence = (location.state?.confidence ?? 0) * 100;
  const rgbImage = location.state?.rgbImage;
  const thermalImage = location.state?.thermalImage;

  // Color logic
  const getColor = () => {
    if (confidence < 40) return "#22c55e"; // green
    if (confidence < 70) return "#eab308"; // yellow
    return "#ef4444"; // red
  };

  const fireDetected = confidence > 60;

  const data = [
    {
      name: "Fire Probability",
      value: confidence,
      fill: getColor(),
    },
  ];

  return (
    <div style={{ padding: "25px", color: "white" }}>
      <h2>🔥 Fire Detection Result</h2>

      {/* Confidence */}
      <h3>
        Confidence:{" "}
        <span style={{ color: getColor(), fontWeight: "bold" }}>
          {confidence.toFixed(2)}%
        </span>
      </h3>

      {/* Fire Status */}
      <div
        style={{
          marginTop: "10px",
          padding: "10px 18px",
          display: "inline-block",
          borderRadius: "10px",
          fontWeight: "bold",
          background: getColor(),
          fontSize: "16px",
        }}
      >
        {fireDetected
          ? "🔥 FIRE DETECTED"
          : confidence > 30
          ? "⚠️ POSSIBLE FIRE"
          : "✅ NO FIRE DETECTED"}
      </div>

      {/* Images */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          marginTop: "35px",
        }}
      >
        {rgbImage && (
          <div>
            <h4>RGB Image</h4>
            <img
              src={rgbImage}
              alt="RGB"
              style={{
                width: "220px",
                borderRadius: "12px",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        )}

        {thermalImage && (
          <div>
            <h4>Thermal Image</h4>
            <img
              src={thermalImage}
              alt="Thermal"
              style={{
                width: "220px",
                borderRadius: "12px",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        )}
      </div>

      {/* Circle Chart */}
      <div
        style={{
          width: "350px",
          height: "350px",
          marginTop: "40px",
        }}
      >
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="value"
            />

            <Legend
              iconSize={10}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />

            <Tooltip />

            {/* Center Text */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: "28px",
                fill: getColor(),
                fontWeight: "bold",
              }}
            >
              {confidence.toFixed(0)}%
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Results;