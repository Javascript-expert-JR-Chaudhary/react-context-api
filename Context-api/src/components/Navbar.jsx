import React, { useContext } from 'react'
import Profile from './Profile';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div className='navbar-cnt'
            style={{
                color: theme === 'light' ? 'black' : '#fff',
                backgroundColor: theme === 'light' ? '#fff' : '#1b1b1b',
                borderColor: theme === 'light' ? 'black' : '#fff',
            }}
        >
            <h1>Logo</h1>
            <Profile />
            <button
                style={{
                    color: theme === 'light' ? 'black' : '#fff',
                    backgroundColor: theme === 'light' ? '#fff' : '#1b1b1b',
                    borderColor: theme === 'light' ? 'black' : '#fff',
                }}
                onClick={toggleTheme}
            >Theme</button>
        </div>
    )
}

export default Navbar;
