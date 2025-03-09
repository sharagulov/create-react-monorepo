// Маршруты и обработчики для API-запросов

const express = require('express');
const { exampleHandler } = require('../controllers/controllers');

const router = express.Router();

// |------- Маршруты и их функции -------| //

router.get('/example', exampleHandler);

// |-------------------------------------| //

module.exports = router;
