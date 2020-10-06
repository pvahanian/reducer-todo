import React, { useState, useReducer } from "react";
import './styles.css';
import {intialState, reducer} from './reducers/appReducer'


function App() {
const [todoListState, dispatch] = useReducer(reducer, intialState )  //Using reducer and intialstate from our appReducer. 
//This will be where we use dispatch to essentially tell it what to do with the data we are passing in.
const [todoItem, setTodoItem] =useState("");  //Holds a local piece of state with the todoItem


const handleChanges = e => {  // Handlechanges will set our todoitem to the value that is changed in our target. 
  //in this case we have one target a input.
  setTodoItem(e.target.value)
}

  return (
    <div className="container">
      <h1>Your Todo list</h1>
      {/* We create the input option here and give it the call back to our Handlechanges on the onChange property */}
      <input
        className="todo-input"
        type="text"
        name="todoItem"
        value={todoItem}
        onChange={handleChanges}    
      />
      {/* What is the strongest tft trait in your opinion? I like elderwood with ez :) */}
      <button
        onClick={() => {
          dispatch({type:"ADD_TODO", payload:todoItem})
        }}
        //Our click of the button is to add a new task.  Hence we pass the dispatch the payload(the todoitem that was set locally from value in our input field)
        //and we hard code in the type of action this dispatch will do with the type.  Type is always required 
      >
      New Task
      </button>
      <button  onClick={() => {
          dispatch({type:"CLEAR_COMPLETED"})
        }}> Clear Completed</button>
      {/* this onclick will not need a payload value passed in.  It just sends tells the dispatch to execute the clear all completed case */}
      
    <div className="todoListItems">
    
    {todoListState.todoList.map(item => {return <p  onClick={() => {dispatch({type:"CROSSOUT_TODO", payload:item.id})}}> 
     {item.completed?<p className="strike">{item.task}</p>:item.task}
    {/* Here we map through our items as they are added to our todolist but we also add another dispatch on our Onclick
    This dispatch has is sent the item.id and is told to cross it out. This is done with a css property strike on our listed todo items */}
     </p> })}
      
    </div>

    </div>
  );
}

export default App;
