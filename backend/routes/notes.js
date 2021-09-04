const express = require('express')
const { body, validationResult } = require('express-validator')
const auth = require('../middleware/auth')

const Note = require('../models/Note')

/* -------------------------------------------------------------------------- */

const router = express.Router()

/** ------------------------------- Get all notes for user ------------------------------
 *  Method: GET api/notes/all
 *  Mode: Private
 */

router.get('/all', auth, async (req, res) => {
    try {
        // Get all notes for current user
        const notes = await Note.find({ user: req.user.id })

        console.log('> Got all notes'.grey, `(${req.user.id})`)
        res.json(notes)
    } catch (err) {
        // Some error occured
        console.error('x Something went wrong!'.red)
        res.status(500).json({ msg: 'Something went wrong!', error: err })
    }
})

/** ------------------------------- Add a new note ------------------------------
 *  Method: post api/notes/addnote
 *  Mode: Private
 */

router.post(
    '/addnote',
    auth,
    [
        body('title', 'Enter valid Title!').isLength({ min: 5 }),
        body(
            'desc',
            'Description must be at least 10 character long!'
        ).isLength({ min: 10 })
    ],
    async (req, res) => {
        // Check for valid inputs
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        // Create and save a note in database
        try {
            const { title, desc, tag } = req.body

            const note = new Note({ title, desc, tag, user: req.user.id })
            const savedNote = await note.save()

            console.log('+ Created a post'.green)

            res.json({ savedNote })
        } catch (err) {
            // Some error occured
            console.error('x Something went wrong!'.red, err)
            res.status(500).json({ msg: 'Something went wrong!', error: err })
        }
    }
)

/** ------------------------------- Update a new note ------------------------------
 *  Method: post api/notes/updatenote/:id
 *  Mode: Private
 */

router.put(
    '/updatenote/:id',
    auth,
    [
        body('title', 'Enter valid Title!').isLength({ min: 5 }),
        body(
            'desc',
            'Description must be at least 10 character long!'
        ).isLength({ min: 10 })
    ],
    async (req, res) => {
        // Find a note to be updated
        let note = await Note.findById(req.params.id)

        // If note does not exists
        if (!note) {
            console.error('x Post not found!'.yellow)
            return res.status(404).json({ msg: 'Not Found!' })
        }

        // User is not authorized
        if (note.user.toString() !== req.user.id) {
            console.error('x User unauthorized!'.red)
            return res.status(401).json({ msg: 'Unauthorized!' })
        }

        // Create new Note object
        try {
            const { title, desc, tag } = req.body
            const newNote = {}

            if (title) {
                newNote.title = title
            }

            if (desc) {
                newNote.desc = desc
            }

            if (tag) {
                newNote.tag = tag
            }

            // Update note in db
            note = await Note.findByIdAndUpdate(
                req.params.id,
                { $set: newNote },
                { new: true }
            )

            console.log('+ Updated a post'.green)
            res.status(200).json({ note })
        } catch (err) {
            // Some error occured
            console.error('x Something went wrong!'.red, err)
            res.status(500).json({ msg: 'Something went wrong!', error: err })
        }
    }
)

module.exports = router
