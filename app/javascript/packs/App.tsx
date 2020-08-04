import React from "react";
import { Provider } from "react-redux";

import ExtraComponent from "./ExtraComponent";
import configureStore from "./main_reducer";
import TodoList from "./TodoList";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h2>Hello!</h2>
          <TodoList />
          <ExtraComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
