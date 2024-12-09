//To connect to the database, you must create a Sequelize instance.
// This can be done by either passing the connection parameters separately to the Sequelize constructor
//or by passing a single connection URI:

//OPTION 2  Passing parameters separately (sqlite)

// database.js

//import sequelize 
const { Sequelize } = require('sequelize');

//create instance and specifying the dialect
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});


//export the sequelize instance 
module.exports = sequelize;


//This sequelize isntance will be used by the model

