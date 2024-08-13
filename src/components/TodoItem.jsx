import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTodo, editTodo } from "../todos/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setEditTask(true);
  };

  const handleSave = () => {
    dispatch(editTodo({ id: todo.id, newTask }));
    setEditTask(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleCompleted(todo.id))}
      />

      {editTask ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.task}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
