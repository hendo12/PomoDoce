import React from 'react';

const TodoItem = (props) => {
  const {todo, index} = props;

  return (
    <li>
      <input onChange={ (event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}/>
      <span className={todo.done ? "done" : ''}>{todo.title}</span>
      <button onClick={ () => props.removeTodo(index)}>Deletee</button>
    </li>
  )
}

export default TodoItem;