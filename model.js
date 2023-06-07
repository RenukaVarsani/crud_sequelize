const { sq } = require("./db");
const { DataTypes } = require("sequelize");
const User = sq.define("customer", {

  id:{
    type: DataTypes.INTEGER, 
       primaryKey: true,
       allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
 
    
  },
  fullName: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  employed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
User.sync().then(() => {
  console.log("User Model synced");
});
module.exports = User;
