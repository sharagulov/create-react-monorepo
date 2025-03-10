
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/routes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', routes);

// Here you need to initialize WebSocket or other middleware, if necessary

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
