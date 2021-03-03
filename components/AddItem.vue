<template>
  <form @submit.prevent="addItem">
    <b-form-input
      v-model="text"
      class="add_input"
      placeholder="Введите заметку"
    />
    <b-button type="submit" variant="success">
      Добавить
    </b-button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            text: "",
        }
    },
    methods: {
        addItem() {
            this.$emit("add-todo", this.text)
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        display: flex;
        justify-content: center;
    }
    .add_input {
        max-width: 250px;
        margin-right: 25px;
    }
</style>
