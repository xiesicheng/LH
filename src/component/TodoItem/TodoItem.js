import React, {Component, Fragment} from 'react';
import TodoItemUI from './TodoItemUI';
import AddTodoItemPanel from '../AddTodoItemPanel/EditTodoItemPanel';
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
    this.state ={
      isShow: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditExit = this.handleEditExit.bind(this);
    this.onOk = this.onOk.bind(this);
  }
  // shouldComponentUpdate(nextProps){
  //   if(nextProps === this.props){
  //     return false;
  //   } else return true;
  // }
  render() {
    return (
      <Fragment>
        <AddTodoItemPanel 
          flag={this.state.isShow}
          handleAddExit={this.handleEditExit}
          onOk={this.onOk}
          inputValue={this.props.content}
          dateString={this.props.time}
        />
        <TodoItemUI 
          itemStyle={this.props.itemStyle}
          content={this.props.content}
          time={this.props.time}
          checked={this.props.checked}
          handleDelete={this.handleDelete}
          handleClick={this.handleClick}
          handleEdit={this.handleEdit}
        />
      </Fragment>
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
    // console.log('edit'+this.props.index);
    this.setState(()=>({
      isShow: true
    }))
  }
  handleEditExit() {
    // console.log('exitEdit')
    this.setState(()=>({
      isShow: false
    }));
  }
  onOk(inputValue, dateString) {
    const action = actionCreators.getEditTodoItemAction(this.props.index, inputValue, dateString);
    store.dispatch(action);
  }
}
export default TodoItem;