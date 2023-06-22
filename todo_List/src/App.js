import React from 'react';
import { Component } from 'react';
import './css/Reset.css'; 
import './App.css';

import TodoItem from './component/TodoItem.js';
import ItemComp from './component/ItemComp.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        '다람쥐 헌 쳇바퀴에 타고파123',
        '다람쥐 헌 쳇바퀴에 타고파456',
        '다람쥐 헌 쳇바퀴에 타고파789',
        '다람쥐 헌 쳇바퀴에 타고파101',
        '다람쥐 헌 쳇바퀴에 타고파102',
        '다람쥐 헌 쳇바퀴에 타고파103'
      ]
    };
  }

  addTodoItem = (item) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, item]
    }));
  };

  handleModify = (index, newValue) => {
    console.log('수정버튼 클릭, index:', index);
    const updatedTodos = [...this.state.todos];
    updatedTodos[index] = newValue;
    this.setState({
      todos: updatedTodos
    });
  };

  handleDelete = (index) => {
    console.log('삭제버튼 클릭, index:', index);
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({
      todos: updatedTodos
    });
  };

  handleChange = (index, value) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index] = value;
    this.setState({
      todos: updatedTodos
    });
  };

  render() {
    return (
      <div id='content-wrap'>
        <div id='todo-wrap'>
        <h1>To-do List</h1>
          <ItemComp addTodoItem={this.addTodoItem} />
          {this.state.todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              handleChange={this.handleChange}
              onModify={this.handleModify}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;


