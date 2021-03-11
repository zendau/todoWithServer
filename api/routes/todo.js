
const { Router } = require('express')

const router = Router()

const Todo = require("../db/models/todos")

router.get('/todo', async (req, res) => {
    let todoData = null
    await Todo.findAll({ raw: true })
        .then(todoes => {
            todoData = todoes
        }).catch(err => console.log(err));
    res.json(todoData)
})

router.post("/todo", async (req, res) => {
    const result = {}
    await Todo.create({
        title: req.body.title,
        status: 0,
    }).then(res => {
        result.id = res.dataValues.id
        result.title = res.dataValues.title
        result.status = res.dataValues.status ? 1 : 0
    }).catch(err => console.log(err));
    res.json(result)
})

router.put("/todo", (req, res) => {
    Todo.update({ status: req.body.status }, {
        where: {
            id: req.body.id
        }
    })
    res.status(201)
})

router.delete("/todo/:id", (req, res) => {
    console.log("delete", req.params)
    Todo.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(201)
})

module.exports = router
