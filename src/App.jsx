import { useState } from "react"
import AddTodo from "./components/AddTodo"
import Heading from "./components/Heading"
import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"


function App() {

  const initialTodoItems = [

  ]

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`${itemName}, ${itemDueDate}`)
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    // console.log(newTodoItems);
    setTodoItems(newTodoItems);

  }

  const handleDeleteItem = (todoItemName) => {
    // console.log(todoItemName);
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }


  return (
    <>
      <center className="todo-container" >
        <Heading></Heading>
        <AddTodo handleNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem}></TodoItems>

      </center >
    </>
  )
}

export default App
