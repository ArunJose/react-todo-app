import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }
  handleRemove = () => {
    this.props.remove(this.props.todo.id);
  };
  render() {
    return (
      <div>
        {this.props.todo.task}
        <button>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}
