import { useRef, useState } from "react";

function AddTodo({ handleNewItem }) {

    // const [todoName, setTodoName] = useState();
    // const [dueDate, setDueDate] = useState();


    const todoNameElement = useRef();
    const dueDateElement = useRef();

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value);

    // }

    // const handleDatechange = (event) => {
    //     setDueDate(event.target.value);
    // }

    const handleAddButtonClick = () => {
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        handleNewItem(todoName, dueDate);


        // setDueDate();
        // setTodoName();
    }

    return <>

        <div className="row">

            <div className="col-6"><input type="text" ref={todoNameElement} /></div>
            <div className="col-4"><input type="date" ref={dueDateElement} /></div>
            <div className="col-2"><button type="button" className="btn btn-success"
                onClick={handleAddButtonClick}>Add</button></div>


        </div>
    </>
}

export default AddTodo;