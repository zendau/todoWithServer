const Sequelize = require("sequelize");
const sequelize = new Sequelize("nuxttodo", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db
