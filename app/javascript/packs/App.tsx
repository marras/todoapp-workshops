import React from "react";
import Todo from "./Todo";

class App extends React.Component {
  state = {
    items: [
      { name: "Pączki", done: true },
      { name: "Piwo", done: false },
    ],
  };

  renderItems = () => {
    return this.state.items.map((item) => <Todo item={item} />);
  };

  render() {
    return (
      <div>
        <h2>Hello!</h2>
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
