import React from 'react'

import React, { useState } from "react";


export const Context = React.createContext();


export const UserProvider = ({ ProfilePage }) => {
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "john@example.com",
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {ProfilePage}
        </UserContext.Provider>
    );
};
