import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin layout + pages
import AdminLayout from "./components/admin/Layout";
import AdminDashboard from "./pages/admin/Dashboard";

// Auth pages
import Login from "./pages/auth/Login";
import Users from "./pages/admin/Users";
import AddItem from "./pages/admin/AddItem";

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
          <Route path="/admin/users" element={<Users />}/>
          <Route path="/admin/manage-items/add" element={<AddItem />} />
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
