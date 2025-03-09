// const bcrypt = require('bcryptjs');

const { PrismaClient } = require('@prisma/client');
const { generateTokens, validateRefreshToken, tokens } = require('../utils/tokenUtils');

const prisma = new PrismaClient();

// Функции-обработчики, которые будут вызываться при API-запросах

const exampleHandler = async (req, res) => {

  // логика обработки запроса

};

module.exports = { exampleHandler };
