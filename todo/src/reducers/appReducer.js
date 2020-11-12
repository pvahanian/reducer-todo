// Here we set up the intialState which is:
// An Array of objects with the task, if its completed as a boolean, and an id
export const intialState = {
    todoList: [{
      task:"Please work",
      completed:false,
      id:0
    }],
  }
  
  
  //Here we are setting up the reducer function which is the meat and potatoes of our app
  export const reducer =(state, action) => {
  //State is whats being held in todoListState on App and action will determine what dispatch we return

  //We create a local varible new task in the event that we get a newTask 
    const newTask = {
      task:action.payload,
      //We pass the current payload being passed in as the new task
      id:Date.now(),
      //We use date.now to assign a random id to the new task
      completed:false
      //Obviously if the task is being added to the list it isnt complete
    } 
    
   
    switch(action.type){
      case "ADD_TODO":
      //Using switch statements to determine action
      return {
        ...state,        // We spread the current state, nothing is really modified here
        todoList:[...state.todoList, newTask] //We spread the list inside the state and then add our new task to it
      };
  
      case "CROSSOUT_TODO":
        //We map through the items inside state.todolist and see if any of the id's match the id being passed in by
        // our action.payload.  Looking at this code it can be done more effeciently
        const newArr = state.todoList.map(iter => {
          if (action.payload === iter.id){
            return {...iter, completed: !iter.completed}
            // if it finds a match it will change completed to true 
          }
          return iter
          //if not it will return the task back to newArr.  This will happen everysingle time expect the one it it
          //matches the id
        })
        return {
          ...state, todoList: newArr
        };
        //once it has completed the maping of all the elements and switched the one id to true it will return a copy
        //of state and override the todoList with the newArr
        
  
      case "CLEAR_COMPLETED":
        const incomplete = state.todoList.filter(iter => {
          return iter.completed===false
        })
        //this will filter through the array and only return tasks that have property completed set to false
        //thus getting rid of any task that are completed = true
        return {
          ...state, 
          todoList: incomplete
        };
        //this will return a copy of state again and replace the todoList with the incomplete array created above
      default:
        return state;
    }
    
  }
  