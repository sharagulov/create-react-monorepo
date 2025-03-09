
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/routes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', routes);

// Тут нужно инициализировать WebSocket и другие middleware, если необходимо

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
