import { createStore } from "redux";

import { Types } from "./actions";

const INITIAL_STATE = {
  todos: [
    { name: "szlugi", done: false },
    { name: "długi", done: true },
  ],
  username: "Maras",
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case Types.TOGGLE_TODO: {
      const { todos } = state;
      const newTodos = [...todos];
      newTodos.splice(action.index, 1, {
        ...todos[action.index],
        done: !todos[action.index].done,
      });
      return { ...state, todos: newTodos };
    }
    case Types.CHANGE_NAME: {
      return { ...state, username: action.name };
    }
    default:
      return state;
  }
};

const configureStore = () =>
  createStore(
    rootReducer,
    INITIAL_STATE,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
