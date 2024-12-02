import "bootstrap";
import "./todo.css"

function Todo({task,index,onclick}){

    return(
        <>
            <div id="todo-body" className="container w-75 p-2 d-flex justify-content-between align-items-center flex-row g-0 p-0">
                {task}
                <button onClick={onclick} id="todo-delete" className="btn btn-danger">Delete</button>
            </div>
        </>
    )
}



export default Todo;