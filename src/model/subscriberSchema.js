const mongoose = require('mongoose');

// Subscribers Schema, the way subscribers data will be organised in DB

const subscriberSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    subscribedChannel : {
        type : String,
        required : true,
    },
    subscribedDate : {
        type : Date,
        required : true,
        default : Date.now,
    },
});

// Exporting 'SubscriberSchema' so that we can practice Modular Coding
// We are exporting 'subscriberSchema' as 'Subscriber'

module.exports = mongoose.model('Subscriber' , subscriberSchema);