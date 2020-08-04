import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    items: [{ name: "piwo", done: false }],
  };

  handleToggle = (i: number) => {
    const { items } = this.state;
    const newItems = [...items];
    newItems.splice(i, 1, { ...items[i], done: !items[i].done });

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
    return (
      <>
        <table>
          <tbody>{this.renderItems()}</tbody>
        </table>
      </>
    );
  }
}

export default TodoList;
