import React from 'react'

export default function TodoItem({todos, onDelete}) {
  let myStyle ={
    color: "white"
  }
  return (
    <>
    <div style={myStyle} >
      <h4>{todos.title}</h4>
      <p>{todos.description}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
    </div>
    <hr/>a
    </>
  )
}
