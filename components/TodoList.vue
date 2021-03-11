<template>
  <div class="list">
    <ul v-if="todos.length">
      <TodoItem
        v-for="(item,i) in todos"
        :key="item.id"
        :todo="item"
        :index="i"
        :bg-color="bgColor"
        :name-todo="nameTodo"
      />
    </ul>
    <p v-else>
      No todo
    </p>
  </div>
</template>


<script>

import TodoItem from '@/components/TodoItem.vue'

export default {
    components: {
        TodoItem
    },
    props: ['todos', 'bgColor', "nameTodo"],
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
</style>
