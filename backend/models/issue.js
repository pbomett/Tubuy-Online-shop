const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String 
    },
    description:{
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Issue', schema);