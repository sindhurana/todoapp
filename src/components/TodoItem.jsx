import { AiFillDelete } from "react-icons/ai";

function TodoItem({ todoName, todoDate, handleDeleteItem }) {

    return <>
        <div className="container text-center">

            <div className="row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2"><button type="button" className="btn btn-danger"
                    onClick={() => handleDeleteItem(todoName)}><AiFillDelete /></button></div>
            </div>



        </div>

    </>
}

export default TodoItem;