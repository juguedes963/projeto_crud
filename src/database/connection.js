const { Sequelize,DataTypes,Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')
try {
    sequelize.authenticate().then(e => e);
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
module.exports = {sequelize,DataTypes,Model}
