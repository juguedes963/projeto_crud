const { Sequelize,DataTypes,Model,QueryTypes } = require('sequelize');
const sqlite3=require("sqlite3").verbose()
const db=new sqlite3.Database('bancoProjeto.db')
console.log(db)
const sequelize = new Sequelize('sqlite::memory:')
const queryInterface=sequelize.getQueryInterface()
try {
    sequelize.authenticate().then(Connection => Connection);
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
module.exports = {sequelize,DataTypes,Model,QueryTypes,queryInterface}
