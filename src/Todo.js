import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, updatedTask: this.props.todo.task };
  }
  handleRemove = () => {
    this.props.remove(this.props.todo.id);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.update(this.props.todo.id, this.state.updatedTask);
    this.setState({ isEditing: false });
  };
  handleUpdateText = e => {
    this.setState({ updatedTask: e.target.value });
  };
  handleEditButton = e => {
    this.setState({ isEditing: true });
  };
  render() {
    return this.state.isEditing ? (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="updatedTask"
            onChange={this.handleUpdateText}
            value={this.state.updatedTask}
          />
          <button onClick={this.handleUpdateButton}>Update</button>
        </form>
      </div>
    ) : (
      <div>
        {this.props.todo.task}
        <button onClick={this.handleEditButton}>Edit</button>
        <button onClick={this.handleRemove}>X</button>
      </div>
    );
  }
}
