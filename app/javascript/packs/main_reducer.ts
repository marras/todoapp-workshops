import { createStore } from "redux";

const INITIAL_STATE = {
  todos: [
    { name: "szlugi", done: false },
    { name: "długi", done: true },
  ],
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const configureStore = () => createStore(rootReducer, INITIAL_STATE);

export default configureStore;
