const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mycargarage').then(async () => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.log(err)
});

const {
    Schema,
    model
} = mongoose;

const carSchema = new Schema({
    title: String,
    brand: String,
    price: String,
    age: Number,
    services: {
        type: Map,
        of: String
    }
});

module.exports = model('Car', carSchema);