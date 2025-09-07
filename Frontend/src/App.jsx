import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin layout + pages
import AdminLayout from "./components/admin/Layout";
import AdminDashboard from "./pages/admin/Dashboard";

// Auth pages
import Login from "./pages/auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes inside Layout */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* You can add more admin pages here */}
          {/* <Route path="/admin/history" element={<AdminHistory />} /> */}
          {/* <Route path="/admin/borrow" element={<AdminBorrow />} /> */}
        </Route>

        {/* Faculty Routes (later) */}
        {/* <Route element={<FacultyLayout />}>
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty/borrow-requests" element={<BorrowRequests />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
