<template lang="pug">
  .todo-item(:class="{checked: todo.checked}")
    label.label
      .input-block
        input(
          type="checkbox"
          @change="checkTodoAsComplited"
          :checked="todo.checked"
        ).input
      .title {{todo.name}}
    .button
      router-link(
        tag="button"
        :to="`/view/${todo.name}`"
      ).view ->
    .button(
      type="button"
      @click="removeExistedTodo"
    ).remove x
</template>
<script>
import {mapMutations} from 'vuex';
export default {
  props:{
    todo:Object
  },
  methods:{
    ...mapMutations(['removeTodo','checkedTodo']),
    removeExistedTodo() {
      this.removeTodo(this.todo.id)
    },
    checkTodoAsComplited(e){
      console.log(e.target.checked);
      const todoItem = {
        ...this.todo,
        checked: e.target.checked
      }

      this.checkedTodo(todoItem);
    }
  }
}
</script>

<style lang="scss" scoped>

.checked .title {
  text-decoration: line-through;
}

.title{
  padding: 15px 0;
  display: block;
  line-height: 1.2;
}
.button {
  width: 40px;
}
.remove {
  background: transparent;
  border: none;
  color: firebrick;
  cursor:pointer;
  font-size: 20px;
  visibility: hidden;
}
.view {
  visibility: hidden;
  cursor: pointer;
}

.todo-item{
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover{
    .view,
    .remove{
      visibility: visible;
    }
  }
}


.label{
  display: flex;
}
.input-block{
  width:60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
