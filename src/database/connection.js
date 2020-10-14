<<<<<<< HEAD
const { Sequelize,DataTypes,Model,QueryTypes } = require('sequelize');
const sqlite3=require("sqlite3").verbose()
const db=new sqlite3.Database('bancoProjeto.db')
console.log(db)
const sequelize = new Sequelize('sqlite::memory:')
const queryInterface=sequelize.getQueryInterface()
=======
const { Sequelize, DataTypes, Model, QueryTypes } = require('sequelize');
const sequelize = new Sequelize('projeto_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
const queryInterface = sequelize.getQueryInterface()
>>>>>>> e47c5151bd3104522199622c8eba622f6975ce9d
try {
    sequelize.authenticate().then(Connection => Connection);
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
module.exports = { sequelize, DataTypes, Model, QueryTypes, queryInterface }
