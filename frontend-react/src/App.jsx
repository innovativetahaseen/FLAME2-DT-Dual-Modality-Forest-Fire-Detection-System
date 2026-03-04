import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Detection from "./pages/Detection";
import Results from "./pages/Results";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Register from "./pages/Register";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <Routes>

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main App Layout */}
        <Route path="/*" element={<MainLayout />} />

      </Routes>
    </Router>
  );
}
export default App;