const express = require('express')

// Create express instance
const app = express()

// Require API routes
const todo = require('./routes/todo')

const db = require("./db/index")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Import API Routes
app.use(todo)

db.sequelize.sync().catch(err => console.log(err));


if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}

// Export express app
module.exports = app
