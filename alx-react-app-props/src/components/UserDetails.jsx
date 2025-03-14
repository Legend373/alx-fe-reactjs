import React, { useContext } from "react";
import { UserContext } from "./UserContext";  // Import UserContext

function UserDetails() {
    const { userData } = useContext(UserContext);  // Consume context using useContext

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;
