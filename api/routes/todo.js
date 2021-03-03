
const { Router } = require('express')

const router = Router()

// Test route
router.use('/todo', (req, res) => {
    res.end('Todo API')
})

module.exports = router
