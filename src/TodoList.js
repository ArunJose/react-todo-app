import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  add = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
  };
  remove = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };
  update = (id, task) => {
    const updatedTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, task: task } : todo;
    });
    this.setState({ todos: updatedTodos });
  };
  render() {
    const todos = this.state.todos.map(todo => (
      <li key={todo.id}>
        <Todo todo={todo} remove={this.remove} update={this.update} />
      </li>
    ));
    return (
      <div>
        <NewTodoForm add={this.add} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
