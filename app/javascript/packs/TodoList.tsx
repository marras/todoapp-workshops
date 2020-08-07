import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import { Creators } from "./actions";

interface IProps {
  items: Array<{ name: string; done: boolean }>;
  toggleItem: (i: number) => void;
  changeName: (name: string) => void;
}

class TodoList extends React.Component<IProps> {
  handleToggle = (i: number) => {
    // this.props.dispatch({ type: "TOGGLE_TODO", index: i });
    // this.props.dispatch(Creators.toggleTodo(i));
    this.props.toggleItem(i);
  };

  handleNameChange = (e) => {
    this.props.changeName(e.target.value);
  };

  renderItems = () => {
    return this.props.items.map((item, i) => (
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
        <input type="text" onChange={this.handleNameChange} />
        <table>
          <tbody>{this.renderItems()}</tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.todos,
});

const mapDispatchToProps = {
  toggleItem: Creators.toggleTodo,
  changeName: Creators.changeName,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
