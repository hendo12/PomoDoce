import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />
        );
      })}
    </ul>
  );
};

// const workTimer = () => {
//   // this.setState(activeTimer: true);
//   setInterval(() => console.log("timer on"), 25 * 60 * 60);
//   // this.setState(activeTimer: false);
// };

// const breakTimer = timerLength => {
//   // this.setState(activeTimer: true);
//   setInterval(() => console.log("timer on"), timerLength);
//   // this.setState(activeTimer: false);
// };

// function timer() {
//   let counter = 1;
//   let shortBreak = 5 * 60 * 60;
//   let longBreak = 20 * 60 * 60;

//   for (counter; counter < 9; counter++) {
//     if (counter != 8) {
//       if (counter % 2 !== 0) {
//         workTimer();
//       } else {
//         breakTimer(shortBreak); // need condition to pass correct paramater short or long break
//       }
//     } else {
//       breakTimer(longBreak);
//       counter = 0;
//     }
//   }
// }


export default TodoList;
