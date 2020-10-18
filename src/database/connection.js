const { Sequelize, DataTypes, Model, QueryTypes } = require('sequelize');

  

const sequelize = new Sequelize('database_tutorial', 'julio', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
//  const sequelize = new Sequelize('mysql://xwmbj9tihh3ehxcw:zrpuqr8bis50v295@z8dl7f9kwf2g82re.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/t439i9fss369w472')
  const queryInterface = sequelize.getQueryInterface()

try {
    sequelize.authenticate().then(Connection => Connection);
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
module.exports = { sequelize, DataTypes, Model, QueryTypes, queryInterface }
