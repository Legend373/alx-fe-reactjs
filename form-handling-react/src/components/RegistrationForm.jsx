import { useState } from "react";

const RegistrationForm = () => {
    // Use a single object to manage form state
    const [formData, setFormData] = useState({
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
    };

    // Handle form submission with validation
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData;

        if (!username || !email || !password) {
            alert("All fields are required!");
            return;
        }

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
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;

