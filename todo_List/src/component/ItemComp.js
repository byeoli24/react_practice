import React from 'react';
import { Component } from 'react';

import '../css/Reset.css'; 
import '../css/ItemComp.css'; 

class ItemComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newItem } = this.state;
    if (newItem.trim() === '') {
      return;
    }
    this.props.addTodoItem(newItem);
    this.setState({
      newItem: ''
    });
  };

  render() {
    return (
      <div id='wrap'>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className='todoCre'
            value={this.state.newItem}
            onChange={this.handleChange}
          />
          <button type="submit" className='itemModi'>작성</button>
        </form>
      </div>
    );
  }
}

export default ItemComp;
