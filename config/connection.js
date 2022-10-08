require('dotenv').config();

const Sequelize = require('sequelize');

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize('techblog_db', 'root', 'gyno-4128', {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

// module.exports = sequelize;

// create a connection to our database using a teniary operator to check if the enviroment is production or not
const sequelize = process.env.JAWSDB_URL ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    // the purpose of host is to tell the database where to connect to
    host: 'localhost',
    // the purpose of dialect is to define the type of database we are using
    dialect: 'mysql',
    // the purpose of port is to allow us to use the same database on multiple computers
    port: 3306
  });

module.exports = sequelize;