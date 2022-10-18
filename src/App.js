import React, { useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import Children from "./Components/Children/Children";
import NavScrollExample from "./Components/Navbar/Navbar";

const App = () => {
  const [taskArr, setTaskArr] = useState([]);

  function handleTask(objTask) {
    let newTodo = taskArr;
    newTodo.push(objTask);
    setTaskArr(newTodo);
    console.log(taskArr);
  }

  return (
    <div>
      <NavScrollExample />
      <div className="w-50 mx-auto mt-5">
        <AddTodo handleTask={handleTask} />
      </div>
    </div>
  );
};

export default App;
