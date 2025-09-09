import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/">
                <p className="text-2x1 font-bold text-gradient">myParser</p>
            </Link>

            <Link to='/upload' className="primary-button w-fit">
                Resume Upload
            </Link>
        </nav>
    )
}

export default Navbar