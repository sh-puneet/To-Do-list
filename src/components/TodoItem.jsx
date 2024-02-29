function TodoItem({todoName, todoDate, handleClick}) {


    return (
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button onClick={()=>handleClick(todoName)} type="button" className="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
  