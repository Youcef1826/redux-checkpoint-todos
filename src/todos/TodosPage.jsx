import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const TodosPage = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodosPage;
