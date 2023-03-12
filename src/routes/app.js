const express = require('express');
const Subscriber = require('../model/subscriberSchema');
const path = require('path');

// Invoke express function
const app = express();

//--------------------- Routes -----------------------------------

// Sending a html file with some information about routes to root '/'
app.get('/',(req , res) => {
    res.sendFile(path.join(__dirname ,'../index.html'))
});


// Get All Subscribers
// When find() is without any parmeter then it will find all documents in .
// Data will look good and readable by JSON.stringify(subscribers , null , 2) + '\n'.

app.get('/subscribers' , async(req , res , next) => {
    try {
        let subscribers = await Subscriber.find();

        res.status(200).type('json').send(
            JSON.stringify(subscribers , null , 2) + '\n'
        );

    } catch(err){
        res.status(500).json({Error : 'Failed To Get Subscribers', err })
    }
});


// Get all subscribers name and subscribed channel
// Following code will find all the document in the DB.
// But will show the result for 'name' and 'subscribedChannel'

app.get('/subscribers/names', async(req , res , next) => {
    try {
        let subscribers = await Subscriber.find({},
            { name : 1 ,
              subscribedChannel  : 1 ,
              _id : 0
            }
        );

        res.status(200).type('json').send(
            JSON.stringify(subscribers , null , 2) + '\n'
        );

    } catch(err) {
        res.status(500).json({Error : 'Failed to Get Subscribers Name', err})
    }
});


// Get Subscriber by id
// To grab the id form the path 'req.params.parameter_name' is used.
// findById() function will serach each document in the DB.

app.get('/subscribers/:id' , async(req , res) => {
    try{
        let id = req.params.id ;

        let subscriber = await Subscriber.findById(id);
        res.status(200).type('json').send(
            JSON.stringify(subscriber , null , 2) + '\n'
        );

    } catch(err) {
        res.status(400).json({message : err.message });
    }
});


// If the path is invalid it will show 'Invalid Path'

app.all('/*', (req , res) => {
    res.send('Invalid Path');
});

module.exports = app;