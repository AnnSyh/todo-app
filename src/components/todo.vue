<template lang="pug">
  div
    div.todo
      todo-input
      todo-list(
        v-if="todos.length > 0"
        :todos="filteredTodos"
        @removeTodo="removeTodo"
        @checkedTodo="checkedTodo"
        @filterTodos="filterTodos"
      )
</template>

<script>
import todoInput from './todoInput';
import todoList from './todoList';
import { mapState } from  'vuex';

export default {
  data() {
    return {
      // todos: [],
      // filter: 'all'
    }
  },
  components: {
    todoInput,
    todoList
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter
    }),
    filteredTodos() {
      switch (this.filter) {
        case "all":
          return this.todos;
        case "active":
          return this.todos.filter(item => item.checked === false);
        case "completed":
          return this.todos.filter(item => item.checked);
      }
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todoId) {
      // console.log('todo.vue: removeTodo',todoId)
      this.todos = this.todos.filter(item => {
        return item.id !== todoId
      })
    },
    checkedTodo(todo) {
      // console.log('checkedTodo',todo);
      this.todos = this.todos.map(item => (item.id === todo.id ? todo : item));
    },
    filterTodos(filter) {
      console.log('filter', filter);
      this.filter = filter;
    }
  },

}
</script>

<style lang="scss" scoped>
.todo {
  margin-top: 100px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
