const mongoose = require('mongoose');
const Subscriber = require('./model/subscriberSchema');
const data = require('./data');
require('dotenv').config();
console.log(process.env.ATLAS_PASSWORD);
console.log(process.env.ATLAS_USERNAME);

// CONNECTION TO DATABASE
const connectionString = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.q23poih.mongodb.net/?retryWrites=true&w=majority`;
console.log(connectionString);


// mongoose.connect will return a promise,so
// we are using .then() for resolve & .catch() for error

mongoose.connect(connectionString , {
    useNewUrlParser : true , useUnifiedTopology : true
})
.then(() => console.log('Connected...'))
.catch((err) => console.log('Failed To Connect : ', err));


// Refresh data in subscribers collection in DB
const refreshData = async() => {
    try {
        // It will delete all the data form the DB for that collection
        await Subscriber.deleteMany({},{wtimeout : 30000});
        console.log('Deleted all Subscribers');

        // It will add the new subscribers from the data.js file
        const newSubscribers = await Subscriber.insertMany(data);
        console.log(`New ${newSubscribers.length} Subscribers Added`);

    } catch(err) {
        console.log(`Failed : `, err);

    } finally {
        // Disconnecting with DB after doing above operations 
        mongoose.disconnect();
        console.log('...Disconnected');
    }
};

refreshData();