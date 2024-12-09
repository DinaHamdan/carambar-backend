

//Create model of joke by using the sequelize instance model/joke.js
//declare a datatype using sequelize instance declared in the db
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

//Declare a constant of an object called joke and declaring type as string
const Joke = sequelize.define('Joke', {
    joke: {
        type: DataTypes.STRING,
        //the joke is required cannot be empty
        allowNull: false,
    },
});

//export object

module.exports = Joke;