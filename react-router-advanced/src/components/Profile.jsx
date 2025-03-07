// src/components/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Profile</h1>
            <nav style={{ marginBottom: "20px" }}>
                <Link
                    to="details"
                    style={{ marginRight: "10px", textDecoration: "none", color: "#007bff" }}
                >
                    Profile Details
                </Link>
                <Link
                    to="settings"
                    style={{ textDecoration: "none", color: "#007bff" }}
                >
                    Profile Settings
                </Link>
            </nav>
            <Outlet /> {/* Renders the nested route component */}
        </div>
    );
};

export default Profile;