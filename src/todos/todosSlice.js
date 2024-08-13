import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        task: action.payload,
        completed: false,
      });
    },
    toggleCompleted: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newTask } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) {
        todo.task = newTask;
      }
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo, editTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
