// src/components/ProtectedRoute.jsx
// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the useAuth hook

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth(); // Use the useAuth hook

    // If not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If authenticated, render the nested routes
    return <Outlet />;
};

export default ProtectedRoute;