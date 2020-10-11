const {DataTypes,sequelize}=require('../connection')
const modelUser=sequelize.define("user",{
    id:DataTypes.INTEGER.key()
})