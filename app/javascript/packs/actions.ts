import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  toggleTodo: ["index"],
  addTodo: ["name"],
  changeName: ["name"],
});
