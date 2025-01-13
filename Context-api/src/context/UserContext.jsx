import { useEffect } from "react";
import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const fetchUserData = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json());
        console.log(response);
        setUser(response)
    }

    useEffect(() => {
        fetchUserData(1);
    }, [])
    return <UserContext.Provider value={{ user, fetchUserData }}>
        {children}
    </UserContext.Provider>
}