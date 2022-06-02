const express = require("express")
const router = express.Router();
const { Category } = require('../models/category')


// read categories from mongoDB
router.get('/get-all', (req, res) => {
    Category.find({}, (err, data) => {
        err ? res.send(`${err}`): res.send(data);
    })
})


module.exports = router;