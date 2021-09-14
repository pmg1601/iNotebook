import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    let history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const login_URL = 'http://localhost:5000/api/auth/login'

        const response = await fetch(login_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdjNWU3MGE2ZmMyNDU0ZTNlYWNhIn0sImlhdCI6MTYzMDc3NTI3Mn0.Qk981QmxW3CmxTwRmXC9ntxqDAZoT_cwLCrLrF5mnAw'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        })

        const json = await response.json()
        console.log(json, json.authToken)

        if (json.authToken) {
            localStorage.setItem('token', json.authToken)
            history.push('/')
        } else {
            console.log('Invalid Login!')
        }
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    /* -------------------------------------------------------------------------- */

    return (
        <form className='my-5' onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                </label>
                <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={credentials.email}
                    onChange={handleChange}
                    aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                </div>
            </div>

            <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                </label>
                <input
                    type='password'
                    className='form-control'
                    id='password'
                    value={credentials.password}
                    onChange={handleChange}
                    name='password'
                />
            </div>

            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
        </form>
    )
}

export default Login
