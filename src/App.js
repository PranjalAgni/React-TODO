import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello From React!',
      newTodo: '',
      todos: [
        {
          title: 'Learn React',
          done: false
        },
        {
          title: 'Learn JSX',
          done: false
        }
      ]
    };
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.formSubmitted.bind(this)}>
          <label htmlFor="newTodo">New Todo</label>
          <input
            onChange={this.newTodoChanged.bind(this)}
            id="newTodo"
            name="newTodo"
            value={this.state.newTodo}
          />

          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
