import React, { useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import Children from "./Components/Children/Children";
import NavScrollExample from "./Components/Navbar/Navbar";
import TodoList from "./Components/TodoList/TodoList";

const App = () => {
  const [taskArr, setTaskArr] = useState([]);

  function handleTask(objTask) {
    let newTodo = [...taskArr];
    newTodo.push(objTask);
    setTaskArr(newTodo);
  }

  function clickDelete(id) {
    let newTaskArr = taskArr.filter((item) => {
      return item.id !== id;
    });
    setTaskArr(newTaskArr);
  }

  return (
    <div>
      <NavScrollExample />
      <div className="w-50 mx-auto mt-5">
        <AddTodo handleTask={handleTask} />
      </div>
      <TodoList taskArr={taskArr} clickDelete={clickDelete} />
    </div>
  );
};

export default App;
