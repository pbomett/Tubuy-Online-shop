const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    imgUrl: {
        type: String
    },
    brand: {
        type: String 
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