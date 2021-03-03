const express = require('express')

// Create express instance
const app = express()
const { loadNuxt, build } = require('nuxt')

// Require API routes
const todo = require('./routes/todo')


// Import API Routes
app.use(todo)

const port = process.env.PORT || 3000

const isDev = process.env.NODE_ENV !== 'production'

async function start() {
    // We get Nuxt instance
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    // Render every route with Nuxt.js
    app.use(nuxt.render)

    // Build only in dev mode with hot-reloading
    if (isDev) {
        build(nuxt)
    }
    // Listen the server
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`)
    })
}

start()
