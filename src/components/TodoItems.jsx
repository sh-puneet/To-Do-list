import TodoItem from "./TodoItem";


function TodoItems({ itemsnDate, handleClick }) {
  return (
    <div className="items-container">
      {itemsnDate.map((item) => (
        
        <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} handleClick={handleClick}></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;