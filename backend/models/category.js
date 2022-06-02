const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryId: {
        type: Number,
        required: true,
    },
    children: {
        type: Array,
        required: true
    },
    leaf: {
        type: Boolean,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    var: {
        type: Boolean,
        required: true,
    }
});

const Category = mongoose.model('Categories', CategorySchema);
module.exports = {Category};