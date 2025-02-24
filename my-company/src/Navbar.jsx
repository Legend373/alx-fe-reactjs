import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.link}>About</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/services" style={styles.link}>Services</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contact" style={styles.link}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

// Simple inline styles
const styles = {
    navbar: {
        background: "#333",
        padding: "10px",
    },
    navList: {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around",
        padding: 0,
    },
    navItem: {
        margin: "0 10px",
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
    },
};

export default Navbar;
