const db = require("../index")


const Todo = db.sequelize.define("todo", {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = Todo
