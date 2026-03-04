import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🔥 Fire Detection Dashboard</h1>

      <div className="cards-container">
        <div className="card">
          <h3>System Status</h3>
          <p className="status-online">🟢 Online</p>
        </div>

        <div className="card">
          <h3>Last Detection</h3>
          <p>No recent activity</p>
        </div>

        <div className="card">
          <h3>Model Accuracy</h3>
          <p>92%</p>
        </div>

        <div className="card">
          <h3>Total Detections</h3>
          <p>128</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
          