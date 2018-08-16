import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Item = new Schema({
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

export default mongoose.model('Item', Item);