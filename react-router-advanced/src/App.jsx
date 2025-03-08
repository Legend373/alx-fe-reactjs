// src/App.jsx
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import HomeComponent from "./components/HomeComponent";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// Create a client for React Query
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Router>
        {/* Navigation Bar */}
        <nav style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
          <Link to="/" style={{ marginRight: "10px", textDecoration: "none", color: "#007bff" }}>
            Home
          </Link>
          <Link to="/posts" style={{ marginRight: "10px", textDecoration: "none", color: "#007bff" }}>
            Posts
          </Link>
          <Link to="/profile" style={{ textDecoration: "none", color: "#007bff" }}>
            Profile
          </Link>
        </nav>

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/posts" element={<PostsComponent />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;