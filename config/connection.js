// it looked weird so i changed it how our activities format looked LOL
const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env, JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_PW,
    process.env.DB_USER,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

module.exports = sequelize;
