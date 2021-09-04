const express = require('express')
const { body, validationResult } = require('express-validator')

const User = require('../models/User')

/* -------------------------------------------------------------------------- */

const router = express.Router()

/** ------------------------------- Create user ------------------------------
 *  Method: POST api/auth/
 *  Mode: Public
 */

router.post(
    '/',
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
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const { name, email, password } = req.body
            await User.create({ name, email, password })

            console.log('+ User Created!'.green)
            res.send(req.body)
        } catch (err) {
            res.status(400).json({ msg: 'User already exists!' })
        }
    }
)

module.exports = router
