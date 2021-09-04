const express = require('express')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

/* -------------------------------------------------------------------------- */

const router = express.Router()
const JWT_SECRET = 'thisissecret'

/** ------------------------------- Register user ------------------------------
 *  Method: POST api/auth/register
 *  Mode: Public
 */

router.post(
    '/register',
    [
        body('name', 'Name must be at least 3 characters long!').isLength({
            min: 3
        }),
        body('email', 'Enter valid email!').isEmail(),
        body(
            'password',
            'Password must be at least 7 characters long!'
        ).isLength({ min: 7 })
    ],
    async (req, res) => {
        // Check for valid inputs
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const { name, email, password } = req.body

            // Check is user exists
            let user = await User.findOne({ email })

            if (user) {
                console.error('x User already exists!'.yellow)
                return res.status(400).json({ msg: 'User already exists!' })
            }

            // Generate hashed password
            const salt = await bcrypt.genSalt(10)
            const secPassword = await bcrypt.hash(password, salt)

            // Create new user
            user = await User.create({ name, email, password: secPassword })

            // Create a web token
            const data = { id: { id: user.id } }
            const authToken = jwt.sign(data, JWT_SECRET, (err, token) => {
                if (err) throw err
                console.log('   [JWT Token Created and sent!]'.gray)
                res.status(201).send({ token })
            })

            console.log('+ User Created!'.green)
            // res.send({ authToken })
        } catch (err) {
            // Some error occured
            console.error('x Something went wrong!'.red)
            res.status(500).json({ msg: 'Something went wrong!', error: err })
        }
    }
)

/** ------------------------------- Log In user ------------------------------
 *  Method: POST api/auth/login
 *  Mode: Public
 */

router.post(
    '/login',
    [
        body('email', 'Enter valid email!').isEmail(),
        body('password', 'Password can not be empty!').exists()
    ],
    async (req, res) => {
        // Check for valid inputs
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        // Validate credentials
        try {
            const { email, password } = req.body

            let user = await User.findOne({ email })

            // User does not exists
            if (!user) {
                console.error(
                    'x Invalid credentials (User does not exists)!'.yellow
                )
                return res.status(400).json({ msg: 'Invalid Credentials!' })
            }

            // Invalid credentials
            const comparePasswords = await bcrypt.compare(
                password,
                user.password
            )
            if (!comparePasswords) {
                console.error(
                    'x Invalid credentials (Passwords do not match)!'.yellow
                )
                return res.status(400).json({ msg: 'Invalid Credentials!' })
            }

            // Permit a web token to a authenticated user
            const data = { id: { id: user.id } }
            const authToken = jwt.sign(data, JWT_SECRET, (err, token) => {
                if (err) throw err
                console.log('   [JWT Token Created and sent!]'.gray)
                res.status(201).send({ token })
            })

            console.log('+ User Logged In!'.green)
        } catch (err) {
            // Some error occured
            console.error('x Something went wrong!'.red)
            res.status(500).json({ msg: 'Something went wrong!', error: err })
        }
    }
)

module.exports = router
