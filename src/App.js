import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    settodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }
    settodos([...todos, myTodo]);




  }

  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <BrowserRouter style={{
        backgroundImage: "url(./bckimage.jpg)",
        backgroungRepeayt: "no-repeat",
        backgroundSize: "cover"
      }}>
        <Header title="Todo's List" />

        <Routes >
          <Route exact path="/" Component={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }} />
          <Route exact path="/About" Component={() => {
            return (
              <>
                <About />
              </>)
          }} />
        </Routes>


        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
