import React from 'react';

const NewTodoForm = (props) => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">New Todo</label>
      <input className="taskInput" onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo}></input>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodoForm;