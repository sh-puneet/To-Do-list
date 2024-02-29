import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from './components/Welcomemessage';

import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddButton = (name, dueDate) => {
    let newTodoItems = [...todoItems, { name: name, dueDate: dueDate }];
    setTodoItems(newTodoItems);
  };
  const handleDeleteButton = (todoName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo handleClick={handleAddButton}></AddTodo>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        itemsnDate={todoItems}
        handleClick={handleDeleteButton}
      ></TodoItems>
    </center>
  );
}

export default App;
