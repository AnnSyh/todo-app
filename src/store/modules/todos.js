const todos = {
  state:{
    todos: [],
    filter: 'all',
  },


  mutations:{
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoId) {
      // console.log('todo.vue: removeTodo',todoId)
      state.todos = state.todos.filter(item => {
        return item.id !== todoId
      })
    },
    checkedTodo(state, todo) {
      // console.log('checkedTodo',todo);
      state.todos = state.todos.map(item => (item.id === todo.id ? todo : item));
    },
    filterTodos(state, filter) {
      state.filter = filter;
    },
    testMutation(state,payload){
      console.log('testMutation',payload);
    }
  },
  getters:{
    todoById: (state) => (id) => {
      return state.todos.filter(item => item.id === id)
    }
  },
  actions:{
    fetchItems(store){
      store.commit('testMutation',42);
      store.dispatch('anotherAction', 66);
      console.log(store);
    },
    anotherAction(store){
      console.log('anotherAction');
    }
  },
}

export default todos;
