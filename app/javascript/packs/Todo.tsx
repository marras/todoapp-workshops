import React from "react";

interface IProps {
  item: { name: string; done: boolean };
}

class Todo extends React.Component<IProps> {
  render() {
    const { name, done } = this.props.item;

    return (
      <tr>
        <td>{name}</td>
        <td>
          <input type="checkbox" checked={done} />
        </td>
      </tr>
    );
  }
}

export default Todo;
