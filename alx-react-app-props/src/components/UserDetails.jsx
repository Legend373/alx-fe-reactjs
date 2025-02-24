import React, { useContext } from "react";
import { Context } from "./UserContext";  // Import UserContext

function UserDetails() {
    const { userData } = useContext(Context);  // Consume context using useContext

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;
