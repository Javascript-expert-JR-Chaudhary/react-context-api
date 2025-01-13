import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { ThemeContext } from '../context/ThemeContext';

const UserDetails = () => {
    const { user, fetchUserData } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    if (user) {
        return <section className='user-details-section'
            style={{
                color: theme === 'light' ? 'black' : '#fff',
                backgroundColor: theme === 'light' ? '#fff' : '#1b1b1b',
                borderColor: theme === 'light' ? 'black' : '#fff',
            }}>

            <h1>User Details</h1>
            <p>User ID: {user.id} </p>
            <p>Name: {user.name} </p>
            <p>Email ID: {user.email} </p>
            <p>Phone: {user.phone} </p>
            <button onClick={() => fetchUserData(Math.floor((Math.random() * 10) + 1))}
                style={{
                    color: theme === 'light' ? 'black' : '#fff',
                    backgroundColor: theme === 'light' ? '#fff' : '#1b1b1b',
                    borderColor: theme === 'light' ? 'black' : '#fff',
                }}
            > Show another user</button>
        </section>
    } else {
        return <span>User details not found!</span>
    }
}

export default UserDetails