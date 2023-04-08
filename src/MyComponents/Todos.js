import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight:"70vh",
    margin: "50px auto",
    color: "white"
  }
  return (
    <div>
      <div className="container my-5" style={myStyle}>
        <h3 className="text-center my-3">Todos List</h3>
        {props.todos.length === 0 ? "No todos to display" :
          props.todos.map((todo) => {
            return (
             <TodoItem todos={todo} key={todo.sno} onDelete={props.onDelete} />
            )
          })
        }


      </div>
    </div>
  )
}

export default Todos
