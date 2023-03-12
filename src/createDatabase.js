const mongoose = require('mongoose');
const Subscriber = require('./model/subscriberSchema');
const data = require('./data');
require('dotenv').config();

// CONNECTION TO DATABASE
// Set connectionString = mongodb://localhost/subscribers to run locally
// Now we are connecting to mongoDB Atlas
const connectionString = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.q23poih.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.connect will return a promise,so
// we are using .then() for resolve & .catch() for error

mongoose.connect(connectionString , {
    useNewUrlParser : true , useUnifiedTopology : true
})
.then(() => console.log('Connected...'))
.catch((err) => console.log('Failed To Connect : ', err));


// Refresh data in subscribers collection in DB

// Each time when we will run this file, every time the subscriber's data
// will add to the database, to ensure the distince subscriber's data, first
// we are deleting every thing and then we are adding the same data.
const resetDB = async() => {
    try {
        // It will delete all the data form the DB for that collection
        await Subscriber.deleteMany({});
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

resetDB();