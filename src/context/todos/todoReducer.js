// Todo Context?

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'addTodo': 
            return {...state, todos: [...state.todos, {id: Date.now().toString(), title:action.title}]};
        case 'removeTodo':
            return {...state, todos: [state.todos.filter(item => item.id !== action.id)]};
        case 'updateTodo':
            return {
                ...state,
                todos: state.todos.map(todo => {
                  if (todo.id === action.id) {
                    todo.title = action.title
                  }
                  return todo
                })
              };
        default: return state;
    }
}