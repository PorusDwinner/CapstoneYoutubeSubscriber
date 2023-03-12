ALMABETTER BACKEND CAPSTONE PROJECT : YOUTUBE SUBSCRIBERS

Author : Amit Saini

Technologies used in this project
    1.Node/Express JS
    2.Mongoose
    3.MongoDB Atlas Database
    4.Nodemon
    5.Mocha
    6.Chai
    7.Superfast

This project includes following files
    . index.js                  (To connect with the DB and start server)
    . index.html                (Sent to localhost:3000 route, which displays some information about routes)
    . app.js                    (routes are created here and made functional)
    . subscriberSchema          (To set the schema for the database )
    . data.js                   (data of the subscribers is included in this file)
    . createDatabase            (this will connect to DB and send the data from data.js)
    . subscriberSchema.test.js  (all test cases are written in this file)

Routes in this 
    . '/'                   ----------->   This will show an html page with the routes information 
    . '/subscribers'        ----------->   This will show all subscribers
    . '/subscribers/name'   ----------->   This will show all subscribers name and subscribed channel
    . '/subscribers/:id'    ----------->   This will show subscribers for the specified _id    

* Connection with database is made using mongoose.
* API requests are Asynchronous.
* All the data sent is in json format.

* Testing framework used in this framework Mocha , Chai and Superfast
    For all four routes testing has been done.

* To run app locally set connectionString to 'mongodb://localhost/subscriber, make sure mongoDB is installed
    locally on your system.    