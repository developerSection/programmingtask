const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('./db/mongoose');

// import routes 
const categoryRoute = require('./routes/category');


// middleware
app.use(express.json());
app.use(cors());

// use routes
app.use('/api/category', categoryRoute)


// start server
app.listen(3001, () => {
    console.log('Server Running')
})