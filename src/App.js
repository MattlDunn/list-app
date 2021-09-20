import React, { useState, useEffect } from "react"
import logo from './logo.svg';
import TodoList from './components/TodoList'
import SideNav from './components/SideNav'

function App() {

  return (
    <div className="bg-gray-200 min-h-screen h-screen min-w-screen w-screen flex flex-row">
        <SideNav user={"John Doe"}></SideNav>
        <TodoList user={"John Doe"} list={"List Title"}/>
    </div>
  );
}

export default App;
