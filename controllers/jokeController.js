//connecto to joke model
const Joke = require('../model/joke');


// Get all jokes
exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};



// Add a new joke
exports.addJoke = async (req, res) => {
    const { joke } = req.body;
    const newJoke = await Joke.create({ joke });
    res.status(201).json(newJoke);
};

// Get a random joke
exports.getRandomJoke = async (req, res) => {
    const jokes = await Joke.findAll();


    // Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
    //Multiplying this by the array length ensures a range from 0 to array.length - 1.
    //   Math.floor() converts it to an integer suitable as an index.  

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(randomJoke);
};

//Get one Joke by id