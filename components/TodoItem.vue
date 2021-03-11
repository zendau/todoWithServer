<template>
  <li>
    <b-card :bg-variant="bgColor" text-variant="white" :header="nameTodo" class="text-center">
      <b-card-text>
        <b-form-checkbox
          class="redbtn"
          :checked="todo.status === 1"
          @change.native="change"
        />
        <span :class="{done: todoActive}">
          {{ index+1 }} - {{ todo.title }}
        </span>
      </b-card-text>
    </b-card>
    <b-button-close class="close__btn" text-variant="danger" @click="remove" />
  </li>
</template>


<script>

export default {
    props: ['todo', 'index', 'bgColor', "nameTodo"],
    data() {
        return {
            todoActive: false
        }
    },
    mounted() {
        this.todo.status === 1 ? this.todoActive = true : this.todoActive = false
    },
    methods: {
        change() {
            this.todoActive = !this.todoActive
            this.$store.dispatch('todos/toggle', this.todo.id)
        },
        remove() {
            console.log(this.todo)
            this.$store.dispatch('todos/remove', this.todo.id)
        }
    }

}
</script>


<style lang="scss" scoped>

    .done {
        text-decoration: line-through;
    }

    li {
        width: 500px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;

        b-button {
            box-sizing: border-box;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: none;
            transition: .5s ease;
            &:hover {
                background-color: red;
            }
        }

    }

    .text-center {
        width: 100%;
    }

    .test label {
        display: none;
    }


</style>

<style lang="scss">

    .redbtn .custom-control-input:checked ~ .custom-control-label::before {
        color: #fff;
        border-color: red;
        background-color: red;
    }

    li button.close__btn {
        padding: 15px;
    }

</style>
