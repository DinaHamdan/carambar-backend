// set up server
// Import dependencies

// core express library that allows to set up the server 
const express = require('express');

// an instant of exprress used to define routes and handle requests
const app = express();

// cross origin resource sharing which allows the API 
//to be accessed (requests) from different domains if front end server is on a differnt server than the backend
const cors = require('cors');

// connects and manages the database
const sequelize = require('./database');

// importing routes file to access the different functionalities of the api 
const jokeRoutes = require('./routes/jokeRoutes');

// middleware that enables CORS (requests from another domain)

app.use(cors());

// For parsing JSON bodies
app.use(express.json());

// add api prefix on the Routes defined in JokeRoutes
app.use('/api', jokeRoutes);


//Set up port number
const port = process.env.PORT || 5000;


// start express server on the specified port number
// callback function starts once the server starts listening
app.listen(port, async () => {
    console.log(`Server running on http://localhost:${port}`);

    // sync sequelize model with the database that was set up which allows the creation and update of tables in the database according to the joke model defined in the sequelize model 
    await sequelize.sync(); // Sync DB
});


//postman POST http://localhost:5000/api/jokes