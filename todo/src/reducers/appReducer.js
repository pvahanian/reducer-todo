
export const intialState = {
    todoList: [{
      task:"Please work",
      completed:false,
      id:0
    }],
    // todo: "new todo"
  }
  
  
  
  export const reducer =(state, action) => {
    const newTask = {
      task:action.payload,
      id:Date.now(),
      completed:false
    } 
    
   
    switch(action.type){
      case "ADD_TODO":
      return {
        ...state,
        todoList:[...state.todoList, newTask]
      };
  
      case "CROSSOUT_TODO":
        const newArr = state.todoList.map(iter => {
          if (action.payload === iter.id){
            return {...iter, completed: !iter.completed}
          }
          return iter
        })
        return {
          ...state, todoList: newArr
        };
        
  
      case "CLEAR_COMPLETED":
        const incomplete = state.todoList.filter(iter => {
          return iter.completed===false
        })
        return {
          ...state, 
          todoList: incomplete
        };
      default:
        return state;
    }
    
  }
  