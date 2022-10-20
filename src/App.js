import React, { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import NavScrollExample from "./Components/Navbar/Navbar";
import TodoList from "./Components/TodoList/TodoList";
import UpdateTodo from "./Components/UpdateTodo/UpdateTodo";

const App = () => {
  const [taskArr, setTaskArr] = useState([]);
  const [show, setShow] = useState(false);
  const [oneEditTask, setOneEditTask] = useState({});

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function saveEditedTask(editObj) {
    let newEditedTaskArr = taskArr.map((item) => {
      if (item.id === editObj.id) {
        return editObj;
      } else {
        return item;
      }
    });
    setTaskArr(newEditedTaskArr);
  }
  // saveEditedTask();
  useEffect(() => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let data = localStorage.getItem("tasks");
      setTaskArr(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  }, [taskArr]);

  return (
    <div>
      <NavScrollExample />
      <div className="w-50 mx-auto mt-5">
        <AddTodo handleTask={handleTask} />
      </div>
      <TodoList
        taskArr={taskArr}
        clickDelete={clickDelete}
        handleShow={handleShow}
        setOneEditTask={setOneEditTask}
      />
      {show ? (
        <UpdateTodo
          handleClose={handleClose}
          show={show}
          oneEditTask={oneEditTask}
          saveEditedTask={saveEditedTask}
        />
      ) : null}
    </div>
  );
};

export default App;
