// const bcrypt = require('bcryptjs');

const { PrismaClient } = require('@prisma/client');
const { generateTokens, validateRefreshToken, tokens } = require('../utils/tokenUtils');

const prisma = new PrismaClient();

// Handler functions that will be called for API requests

const exampleHandler = async (req, res) => {

  // Request processing logic

};

module.exports = { exampleHandler };
