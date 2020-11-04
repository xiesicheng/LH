import React, {Component} from 'react';
import TodoItemUI from './TodoItemUI';
import store from '../../store'
import actionCreators from '../../store/actionCreators';
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
    // console.log('delete'+this.props.index);
    const action = actionCreators.getDeleteTodoItemAction(this.props.index);
    store.dispatch(action);

    if(window.localStorage){
      window.localStorage.setItem('list', JSON.stringify(store.getState().list));
    }
  }
  handleClick() {
    // console.log('click'+this.props.index);
    const action = actionCreators.getCompleteTodoItemAction(this.props.index);
    store.dispatch(action);

    if(window.localStorage){
      window.localStorage.setItem('list', JSON.stringify(store.getState().list));
    }
  }
  handleEdit() {
    console.log('edit'+this.props.index);
  }
}
export default TodoItem;