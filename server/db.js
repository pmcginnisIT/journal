const  Sequelize  = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'password', {
    host: "localhost",
    dialect: "postgres",
  });

sequelize.authenticate().then(
  function() {
    console.log('Connected to journal-walkthrough postgres database');
  }
);

  module.exports = sequelize;
