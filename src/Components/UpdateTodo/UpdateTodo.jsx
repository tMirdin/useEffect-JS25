import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UpdateTodo = ({ show, handleClose, oneEditTask, saveEditedTask }) => {
  const [editedTask, setEditedTask] = useState(oneEditTask.task);

  // console.log(editedTask);
  function handleSave() {
    if (!editedTask.trim()) {
      alert("Заполните поле!");
      return;
    }
    let editObj = {
      task: editedTask,
      id: oneEditTask.id,
    };
    saveEditedTask(editObj);
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={editedTask}
            onChange={(e) => {
              setEditedTask(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateTodo;
