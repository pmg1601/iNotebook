import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    useEffect(() => {}, [location])

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    <b>iNotebook</b>
                </Link>

                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link
                                className={`nav-link ${
                                    location.pathname === '/' ? 'active' : ''
                                }`}
                                aria-current='page'
                                to='/'>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                className={`nav-link ${
                                    location.pathname === '/about'
                                        ? 'active'
                                        : ''
                                }`}
                                to='/about'>
                                About
                            </Link>
                        </li>
                    </ul>

                    <ul className='ms-auto navbar-nav'>
                        <li className='nav-item'>
                            <Link
                                className={`nav-link ${
                                    location.pathname === '/login'
                                        ? 'active'
                                        : ''
                                }`}
                                to='/login'>
                                Log In
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                className={`nav-link ${
                                    location.pathname === '/signup'
                                        ? 'active'
                                        : ''
                                }`}
                                to='/signup'>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
