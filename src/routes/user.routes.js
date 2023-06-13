const express = require('express');
const {
    createUser,
    authenticateUser,
    getUserById,
} = require('../controllers/user.controller');

const { requireAuth } = require('../middleware/auth.middleware');

const router = express.Router();

// Endpoint to create a new user
router.post('/', requireAuth, createUser);

// Endpoint for user login
router.post('/login', requireAuth, authenticateUser);

// Endpoint to get a user by id
router.get('/:id', requireAuth, getUserById);

module.exports = router;
