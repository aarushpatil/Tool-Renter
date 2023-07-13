const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//need to add name and address and stuff
const toolDataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const toolData = mongoose.model('Tool-Data', toolDataSchema);
module.exports = toolData;