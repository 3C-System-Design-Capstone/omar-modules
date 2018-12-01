const Sequelize = require('sequelize');
require('dotenv').config();

const connectionPostgres = new Sequelize('addidas', 'webaccess', 'popcorn', {
  host: 'db',
  dialect: 'postgres',
});

connectionPostgres
  .authenticate()
  .then(() => {
    console.log('postgres connected');
  })
  .catch((err) => {
    console.log('error with server');
    console.log(err);
  });

module.exports.postgres = connectionPostgres;
