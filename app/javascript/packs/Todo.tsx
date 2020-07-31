import React from "react";

interface IProps {
  item: { name: string; done: boolean };
  onToggle: (i: number) => void;
  index: number;
}

class Todo extends React.PureComponent<IProps> {
  handleChange = () => {
    const { onToggle, index } = this.props;
    onToggle(index);
  };

  render() {
    const {
      item: { name, done },
    } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>
          <input type="checkbox" checked={done} onChange={this.handleChange} />
        </td>
      </tr>
    );
  }
}

export default Todo;
