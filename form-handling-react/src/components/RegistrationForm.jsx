import { useState } from "react";

const RegistrationForm = () => {
    // Use a single object to manage form state
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    // State to manage validation errors
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    // Handle input change dynamically
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear the error for the field being updated
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    // Handle form submission with validation
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData;

        // Reset errors
        let newErrors = { username: "", email: "", password: "" };

        // Validate each field
        if (!username) {
            newErrors.username = "Username is required!";
        }
        if (!email) {
            newErrors.email = "Email is required!";
        }
        if (!password) {
            newErrors.password = "Password is required!";
        }

        // If any errors exist, set them and stop submission
        if (username || email || password) {
            setErrors(newErrors);
            return;
        }

        // If no errors, proceed with form submission
        console.log("Form submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
            />
            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;