const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/* -------------------------------------------------------------------------- */

const JWT_SECRET = 'thisissecret'

/* -------------------------------------------------------------------------- */

const fetchuser = (req, res, next) => {
    try {
        // Get user from jwt token and append to request object
        const token = req.header('auth-token')

        if (!token) {
            console.error('x User Not Authorized (No token)!'.yellow)
            return res.status(401).json({ msg: 'User not authorized!' })
        }

        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user

        next()
    } catch (err) {
        console.error('x User Not Authorized (Inavalid token)!'.yellow)
        res.status(401).json({ msg: 'User not authorized!' })
    }
}

module.exports = fetchuser
