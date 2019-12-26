import React, { Component } from "react";
import uuid from "uuid/v4";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      isComplete: false,
      id: ""
    };
  }
  handleChange = e => this.setState({ task: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.add({ ...this.state, id: uuid() });
    this.setState({ task: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newTodo">New Todo</label>
        <input
          type="text"
          id="newTodo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}
