import React, { Component } from 'react';
import '../css/Reset.css';
import '../css/TodoItem.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedValue: this.props.todo,
    };
  }

  handleDelete = () => {
    // 확인 메시지 띄우기
    const confirmed = window.confirm('삭제하시겠습니까?');
    
    if (confirmed) {
      // "예"를 선택한 경우 삭제 동작 수행
      const { index, onDelete } = this.props;
      onDelete(index);
    }
  };

  handleModify = () => {
    const { isEditing, editedValue } = this.state;
    const { index, onModify } = this.props;

    if (isEditing) {
      onModify(index, editedValue);
    }
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  handleInputChange = (event) => {
    this.setState({
      editedValue: event.target.value,
    });
  };

  render() {
    const { id, todo } = this.props;
    const { isEditing, editedValue } = this.state;

    return (
      <ul>
        <li id={`todoitem-${id}`}>
          {isEditing ? (
            <input
              type='text'
              value={editedValue}
              onChange={this.handleInputChange}
            />
          ) : (
            <span>{todo}</span>
          )}

          <button className='modi' onClick={this.handleModify}>
            {isEditing ? '저장' : '수정'}
          </button>

          <button className='del' onClick={this.handleDelete}>
            삭제
          </button>
        </li>
      </ul>
    );
  }
}

export default TodoItem;
