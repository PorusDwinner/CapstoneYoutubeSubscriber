const express = require('express');
const app = require('./routes/app');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 4000;

// Parser JSON bodies
mongoose.set('strictQuery' , false);

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// CONNECTION WITH DATABASE

// Set connectionString = mongodb://localhost/subscribers to run locally
// Now we are connecting to mongoDB Atlas

const connectionString = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.q23poih.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.connect will return a promise,so
// we are using .then() for resolve & .catch() for error

mongoose.connect(connectionString, {
    useNewUrlParser : true , useUnifiedTopology : true
})
.then(() => console.log('Connected...'))
.catch((err) => console.log('Failed To Connect : ', err));

// Start Server

//  Run 'createDatabase.js' from root with path defined other wise connection string will not pick up
//  the values form '.env' file. This basically is reducing our efforts of createing another '.env' file in src

app.listen(port , () => 
    console.log(`Listening on ${port}`)
);