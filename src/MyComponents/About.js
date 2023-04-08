import React from 'react'

const About = () => {
  let mystyle = {
    height: "670px",
    width: "100%",
    color: "blue",

  }
  let mystyle2 = {
    color: "white",
    padding: "20px",
    margin: "20px"
  }
  let mystyle3 = {
    color: "white",
    backgroundColor: "black",
    opacity: "0.9",
    borderRadius: "20px",
    padding: "50px",
    margin: "20px",
  }
  return (
    <div className='container text-center' style={mystyle}>
      <h1 style={mystyle2}> To-do Web Application</h1>
      <h4 style={mystyle3}>Welcome to our to-do list app! Our app is designed to help you manage your daily tasks and stay organized. With our simple and intuitive interface, you can easily add and manage your to-do list items, mark them as complete, and delete them when you no longer need them.
        <br/> <br/>Our to-do list app was built using React, a popular JavaScript library for building user interfaces. React makes it easy to create interactive and dynamic interfaces, and allowed us to create a seamless user experience for managing your to-do list.

          We also utilized React Router, a routing library for React that allows for easy navigation between different pages within the app. This allowed us to create a separate About page that provides users with more information about the app and how to use it effectively.</h4>
    </div>
  )
}

export default About
