export const ACTION = {
    ADD_TODO: 'add_todo',
    REMOVE_TODO: 'remove_todo',
}

export  function todoReducer(todo, action) {
    switch (action.type) {
      case ACTION.ADD_TODO :
        return [action.data, ...todo];
      case ACTION.REMOVE_TODO:
        const filteredTodo = todo.filter((item) => {
          return item.id !== action.id;
        });
        return filteredTodo;
      default:
        return todo;
    }
  }
  
  export  const initialTodo = [];