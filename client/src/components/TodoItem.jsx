import React from 'react';

const TodoItem = (props) => {
  const {todo, index} = props;

  return (
    <li>
      <div className="card card-container">
        <input className="todoCheck" onChange={ (event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}/>
        <span className={todo.done ? "done" : ''}>{todo.title.toUpperCase()}</span>
        {/* <br></br>
        <br></br> */}
        <button className="deleteBtn" onClick={ () => props.removeTodo(index)}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem;