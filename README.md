# Passport / Sequelize Login Demo

This template sets up the barebones structure of a site sign up & login using [Passport](http://passportjs.org/) and [Sequelize](http://sequelizejs.com/) on top of Node and Express with a PostgreSQL database.

## Installation

### Clone Repository

1. `git clone https://github.com/niamurrell/passport-sequelize-demo.git`
2. `cd passport-sequelize-demo`
3. Download dependencies with `yarn`

### Set Up PostgreSQL Database

1. Install postgres on your local machine with brew `brew install postgres` (Mac) or [download manually](https://www.postgresql.org/download/). Installation can be tricky, please see other tutorials for setup ([or maybe this will help](https://niamurrell.github.io/daily/2017/07/14/postgres-success/)).
2. In a new Terminal tab, open postgres command line interface: `psql`
3. Create demo database `CREATE DATABASE authdemo;`
4. Check success `\l`. 'authdemo' should be in your list of databases.
5. Open demo database `\connect authdemo`

### Run App

1. Go back to the `passport-sequelize-demo` directory in the original Terminal tab.
2. `node app.js`
3. Open [localhost:3000/](http://localhost:3000/) in browser
