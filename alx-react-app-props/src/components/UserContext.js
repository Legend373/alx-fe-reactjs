import React from 'react'

import React, { useState } from "react";
import UserProfile from './UserProfile';


const UserContext = React.createContext();



export const UserProvider = ({ ProfilePage }) => {
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "john@example.com",
        age: "25",
        bio: "Loves hiking and photograghy"
    });


    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {ProfilePage},{
                UserProfile
            }
        </UserContext.Provider>

    );
};
export default UserContext
