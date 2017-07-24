var Sequelize = require("sequelize");
var passportLocalSequelize = require("passport-local-sequelize");

// ******* Postgres Connection ********
var sequelize = new Sequelize("authdemo", process.env.PGUSER, process.env.PGPASSWORD, {
	host: process.env.PGHOST,
	dialect: "postgres",
	port: process.env.PGPORT,
	pool: {
	 max: 5,
	 min: 0,
	 idle: 10000
 }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// ******* Postgres Model ********
var User = passportLocalSequelize.defineUser("user", {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});

// Create table in database if not exists
sequelize.sync();





// A helper to define the User model with username, password fields
var User = passportLocalSequelize.defineUser(mydb, {
    favoriteColor: Sequelize.STRING
});

// --- OR ---

// Define a User yourself and use attachToUser

var User = mydb.define('User', {
    nick: Sequelize.STRING,
    myhash: Sequelize.STRING,
    mysalt: Sequelize.STRING
});

passportLocalSequelize.attachToUser(User, {
    usernameField: 'nick',
    hashField: 'myhash',
    saltField: 'mysalt'
});

module.exports = User;
