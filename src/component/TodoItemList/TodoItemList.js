import React, { Component} from 'react';
import TodoItemListUI from './TodoItemListUI'
class TodoItemList extends Component {
  render() {
    return (
      <TodoItemListUI 
        list={this.props.list} 
        title={this.props.title} 
        itemStyle={this.props.itemStyle} 
        checked={this.props.checked}
      />
    );
  }
}

export default TodoItemList;