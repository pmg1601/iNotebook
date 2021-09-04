const express = require('express')
const { body, validationResult } = require('express-validator')

const Notes = require('../models/Notes')

/* -------------------------------------------------------------------------- */

const router = express.Router()

/** ------------------------------- Register user ------------------------------
 *  Method: POST api/auth/register
 *  Mode: Public
 */
router.get('/', (req, res) => {
    res.json([])
})

module.exports = router
