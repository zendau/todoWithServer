export const state = () => ({
    todoes: []
})


export const actions = {
    increment(context, data) {
        context.commit('increment', data);
    },
    async getTodo(ctx) {
        const todo = await this.$axios.$get('/api/todo')
        ctx.commit("AllTodoes", todo)
    },
    async AddTodo(ctx, data) {
        await this.$axios.post('/api/todo', {
            title: data.title,
            status: 0
        })
            .then(function(response) {
                ctx.commit("addTodo", response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
    },
    async toggle(ctx, id) {
        let status = null
        await ctx.state.todoes.forEach((item, i) => {
            if (item.id === id) {
                status = item.status === 0 ? 1 : 0
                ctx.commit("toggle", i, status)
            }
        })

        this.$axios.$put('/api/todo', {
            id,
            status
        }
        ).then(function(response) {
            console.log(response.data)
        })
            .catch(function(error) {
                console.log(error);
            })
    },
    remove(ctx, id) {
        ctx.commit("remove", id)
        this.$axios.$delete('/api/todo/' + id)
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error);
            })
    }
}

export const getters = {
    getTodoes(state) {
        return state.todoes
    },
}

export const mutations = {
    remove(state, id) {
        state.todoes = state.todoes.filter(item => item.id !== id)
    },
    toggle(state, id, value) {
        state.todoes[id].status = value
    },
    increment(state, data) {
        console.log(data)
    },
    AllTodoes(state, data) {
        state.todoes = data
    },
    addTodo(state, data) {
        state.todoes.push(data)
    }
}
