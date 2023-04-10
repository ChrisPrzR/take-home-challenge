const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', require('./routers/brickList'));
app.use('/api/v1', require('./routers/cart'));

app.listen(process.env.PORT , () => {
    console.log(`Running on port ${ process.env.PORT }`)
});

module.exports = app;
