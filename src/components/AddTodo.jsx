import style from './AddTodo.module.css'
import { useState } from "react";


function AddTodo({handleClick}) {
  const [name, setName] = useState();
  const [dueDate, setDueDate] = useState();
const handleButtonClick = ()=>{
  handleClick(name,dueDate);
  setName("");
  setDueDate("");
}

  return (
    <div className="row custom-row items-container" >
      <div className="col-6">
        <input value={name} type="text" placeholder="Enter todo here" onChange={(event)=>setName(event.target.value)}/>
      </div>
      <div className="col-4">
        <input value={dueDate} type="date" onChange={(event)=>setDueDate(event.target.value)}/>
      </div>
      <div className="col-2">
        <button onClick={handleButtonClick} type="button" className="btn btn-success custom-btn">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
