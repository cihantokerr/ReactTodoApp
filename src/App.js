import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Todo from './components/todo';
import { useEffect, useState } from 'react';

function App() {


  var[Tasks,setTasks]=useState([]);


  function AddTask(){

    var newTask=document.getElementById("task-input").value;

    setTasks([...Tasks, newTask]);
    console.log(Tasks);
    
  }


  function RemoveTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }
  


  return (
    
    <div className="App">

      <div id='todo-input-div' className='container-fluid pt-5 d-flex flex-column justify-content-center align-items-center gap-2'>
       <input id='task-input' placeholder='Todo...'/>

        <button type='button' onClick={AddTask} className='btn btn-success'>Add</button>

      </div>

      <div style={{display:Tasks.length==0 ? 'none':'flex'}} id='todo-div' className='container-fluid pt-5 d-flex flex-column justify-content-center align-items-center gap-2'>

        {
          //Listing tasks
          Tasks.map((item,index)=>{
            return(
              <>
                <Todo task={item} index={index} onclick={()=>{RemoveTask(index)}}/>
              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
