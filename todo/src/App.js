import React, { useState, useReducer } from "react";
import './styles.css';
import {intialState, reducer} from './reducers/appReducer'


function App() {
const [todoListState, dispatch] = useReducer(reducer, intialState )
const [todoItem, setTodoItem] =useState("");


const handleChanges = e => {
  setTodoItem(e.target.value)
}

  return (
    <div className="container">
      <h1>Your Todo list</h1>
      <input
        className="todo-input"
        type="text"
        name="todoItem"
        value={todoItem}
        onChange={handleChanges}    
      />
      <button
        onClick={() => {
          dispatch({type:"ADD_TODO", payload:todoItem})
        }}
      >
      New Task
      </button>
      <button  onClick={() => {
          dispatch({type:"CLEAR_COMPLETED"})
        }}> Clear Completed</button>
      
    <div className="todoListItems">
    
    {todoListState.todoList.map(item => {return <p  onClick={() => {dispatch({type:"CROSSOUT_TODO", payload:item.id})}}> 
     {item.completed?<p className="strike">{item.task}</p>:item.task}
      
     </p> })}
      
    </div>

    </div>
  );
}

export default App;
