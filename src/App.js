import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>

      </div>
    );
  }
}

export default App;
