import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const AddTodo = ({ handleTask }) => {
  const [inpTask, setInpTask] = useState("");
  //   console.log(inpTask);
  //   console.log(Date.now());
  function handleAdd() {
    let newTask = {
      task: inpTask,
      id: Date.now(),
    };
    handleTask(newTask);
  }
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Task</InputGroup.Text>
        <Form.Control
          value={inpTask}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setInpTask(e.target.value)}
        />
        <Button variant="success" onClick={handleAdd}>
          Add
        </Button>
      </InputGroup>
    </>
  );
};

export default AddTodo;
