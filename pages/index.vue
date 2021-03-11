<template>
  <div class="todo">
    <AddItem @add-todo="addTodo" />
    <TodoList :todos="getTodo" :name-todo="nameTodo" :bg-color="bgColor" />
    <ul v-for="item in testData" :key="item.login">
      <li>{{ item.login }} - {{ item.pass }} - {{ item.email }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import AddItem from '@/components/AddItem.vue'
import { mapGetters } from "vuex";

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
        }
    },
    computed: {
        ...mapGetters({
            getTodo: "todos/getTodoes",
        })
    },
    mounted() {
        this.allTodoes()
    },
    methods: {
        addTodo(text) {
	            if (text.trim()) {
                this.todos.unshift({ id: Date.now(), title: text, status: false })
	            }
            this.$store.dispatch('todos/increment', text)
        },
        async allTodoes() {
            await this.$store.dispatch("todos/getTodo")
        }
    }
}
</script>


<style lang="scss">
  .todo {
    margin-top: 50px;
  }
</style>
