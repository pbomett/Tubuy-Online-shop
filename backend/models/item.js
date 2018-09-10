const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    codename: {
        type: String
    },
    moq: {
        type: Number 
    },
    itemName:{
        type: String
    },
    price: {
        type: String
    }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Item', schema);