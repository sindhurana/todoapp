import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, handleDeleteItem }) => {
    return <>
        {todoItems.map((item) => <TodoItem todoName={item.name} todoDate={item.dueDate} key={item.name}
            handleDeleteItem={handleDeleteItem}></TodoItem>)}
    </>
}

export default TodoItems;