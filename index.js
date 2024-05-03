const express = require('express')
const cors = require('cors');
const connectToDatabase = require('./db/db.js');


const app = express()
const PORT = process.env.port|| 5001;
app.use(cors());
connectToDatabase();

app.listen(PORT, () => {
    console.log(`Server runingn on port ${PORT}`);
})