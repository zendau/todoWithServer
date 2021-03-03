<template>
  <div class="todo">
    <AddItem @add-todo="addTodo" />
    <TodoList :todos="todos" :name-todo="nameTodo" :bg-color="bgColor" @remove-todo="remove" />
    <ul v-for="item in testData" :key="item.login">
      <li>{{ item.login }} - {{ item.pass }} - {{ item.email }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import AddItem from '@/components/AddItem.vue'

export default {
    name: 'Home',
    components: {
        TodoList, AddItem
    },
    data() {
        return {
            bgColor: "primary",
	          nameTodo: "Продукты",
	          info: "",
	          testData: "",
	          todos: [
                { id: "1", title: "Купить молоко", status: false },
                { id: "2", title: "Купить хлеб", status: false },
                { id: "3", title: "Купить воду", status: false },
	  ]
        }
    },
    mounted() {
        console.log("ok")
        // this.$store.dispatch("GetTodo")
    },
    methods: {
        remove(id) {
	        this.todos = this.todos.filter(t => t.id !== id)
        },
        addTodo(text) {
	            if (text.trim()) {
                this.todos.unshift({ id: Date.now(), title: text, status: false })
	            }
        }
    }
}
</script>


<style lang="scss">
  .todo {
    margin-top: 50px;
  }
</style>
