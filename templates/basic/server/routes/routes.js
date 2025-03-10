// Routes and handlers for API requests

const express = require('express');
const { exampleHandler } = require('../controllers/controllers');

const router = express.Router();

// |--- Routes and their functions ---| //

router.get('/example', exampleHandler);

// |----------------------------------| //

module.exports = router;
