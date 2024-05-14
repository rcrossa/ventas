const express = require('express')
const cors = require('cors');
const connectToDatabase = require('./src/db/db.js');
const routes = require('./src/routes/routes.js')
require('dotenv').config();

const app = express()
const PORT = process.env.port|| 5001;

let corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type,Accept,Authorization'
};
app.use(cors());
connectToDatabase();

app.use(cors(corsOptions));
app.use('/api', routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`Server runingn on port ${PORT}`);
})