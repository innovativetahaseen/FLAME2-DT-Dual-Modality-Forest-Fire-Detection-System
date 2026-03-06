import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Detection from "./pages/Detection";
import Sensor from "./pages/Sensor";
import History from "./pages/History";
import About from "./pages/About";

import MainLayout from "./components/MainLayout";

function App() {

  return (

    <Router>

      <Routes>

        {/* Auth Pages */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Layout */}

        <Route path="/" element={<MainLayout />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="detection" element={<Detection />} />
          <Route path="sensor" element={<Sensor />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />

        </Route>

      </Routes>

    </Router>

  );
}

export default App;