import React from "react";
import Todo from "./Todo";
import ExtraComponent from "./ExtraComponent";
import { makeRequest } from "./request_helper";

class App extends React.Component {
  state = {
    items: [],
    clicked: false,
    ready: false,
    error: false,
  };

  componentDidMount() {
    // Fetch the list of todos from the server
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data.todos, ready: true });
      });
  }

  handleToggle = (i: number) => {
    const { items } = this.state;
    this.setState({ error: false }); // clean up errors

    // items[i].done = !items[i].done; /// NIE - nie zmieni sie this.state!

    const newItems = [...items];
    newItems.splice(i, 1, { ...items[i], done: !items[i].done });
    // newItems[i].done = !newItems[i].done; /// Nie zmienia odnośnika do i-tego elementu na liście

    const changedItem = newItems[i];

    makeRequest(
      `http://localhost:3000/todos/${changedItem.id}`,
      "PUT",
      changedItem
    )
      .then((response) => response.json())
      .then((data) => this.setState({ items: data.todos, ready: true }))
      .catch((error) => {
        console.log("Error while updating server state:", error);
        this.setState({ error: true });
      });

    this.setState({ items: newItems });
  };

  handleClick = () => {
    this.setState({ clicked: true });
  };

  renderItems = () => {
    return this.state.items.map((item, i) => (
      <Todo
        item={item}
        index={i}
        key={`todoItem-${item.name}`}
        onToggle={this.handleToggle}
      />
    ));
  };

  render() {
    const { clicked, ready, error } = this.state;

    return (
      <div>
        <h2>Hello!</h2>
        {ready ? (
          <>
            <table>
              <tbody>{this.renderItems()}</tbody>
            </table>
            <button onClick={this.handleClick}>
              {clicked ? "I WAS CLICKED" : "CLICK ME"}
            </button>
          </>
        ) : (
          <p>Waiting for server response...</p>
        )}
        {error ? <p className="red">ERROR!</p> : null}
        <ExtraComponent />
      </div>
    );
  }
}

export default App;
