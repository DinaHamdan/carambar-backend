//The router is a powerful tool in Express to structure your application logically,
// reduce clutter, and improve maintainability. It supports modular design, better scalability, 
//and easier debugging, making it an essential feature for building robust applications.


const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

// Get all jokes
router.get('/jokes', jokeController.getAllJokes);

// Get a random joke
router.get('/jokes/random', jokeController.getRandomJoke);

// Add a new joke
router.post('/jokes', jokeController.addJoke);

module.exports = router;
