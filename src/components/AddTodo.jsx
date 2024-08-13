import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todos/todosSlice";

function AddTodo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitTask = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={submitTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
}

export default AddTodo;
