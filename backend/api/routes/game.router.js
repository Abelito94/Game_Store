const router = require('express').Router()

const {
    getgameById,
} = require('../controllers/game.controller')

const { authUser } = require('../utils') // Authenticated Route

router.get('/:id', authUser, getgameById)

module.exports = router
