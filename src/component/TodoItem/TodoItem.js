import React, {Component} from 'react';
import TodoItemUI from './TodoItemUI'
/* params
  checked,
  content,
  time
*/

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  render() {
    return (
      <TodoItemUI 
        itemStyle={this.props.itemStyle}
        content={this.props.content}
        time={this.props.time}
        checked={this.props.checked}
        handleDelete={this.handleDelete}
        handleClick={this.handleClick}
        handleEdit={this.handleEdit}
      />
    )
  }
  handleDelete() {
    console.log('delete'+this.props.index);
  }
  handleClick() {
    console.log('click'+this.props.index)
  }
  handleEdit() {
    console.log('edit'+this.props.index);
  }
}
export default TodoItem;