// src/components/Login.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login(); // Simulate login
        navigate("/profile"); // Redirect to the profile page
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Login</h1>
            <button
                onClick={handleLogin}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Log In
            </button>
        </div>
    );
};

export default Login;