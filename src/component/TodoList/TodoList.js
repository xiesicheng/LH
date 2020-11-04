import React, { Component, Fragment } from 'react';
import TodoListUI from './TodoListUI';
import actionCreators from '../../store/actionCreators'
import store from '../../store/index.js'
import EditTodoItemPanel from '../AddTodoItemPanel/EditTodoItemPanel';

// import axios from 'axios';
class TodoList extends Component {
  constructor(props) {
    super(props);
    const state = store.getState();

    const todolist = state.list
      .map((item, index) => Object.assign({index: index}, item))
      .filter((item)=> (item.status === 0));
    
    const didlist = state.list
      .map((item, index) => Object.assign({index: index}, item))
      .filter((item)=> (item.status === 1));
  
    this.state = {
      todolist,
      didlist,
      panelFlag: false
    };

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddTodoItemClick = this.handleAddTodoItemClick.bind(this);
    this.handleAddExit = this.handleAddExit.bind(this)
    store.subscribe(this.handleStoreChange);
  }
  componentDidMount() {
    if(!window.localStorage){
      alert("浏览器不支持localstorage, 数据将在退出后删除");
    }
    const list = JSON.parse(window.localStorage.getItem('list')) || [];
    const action = actionCreators.getInitListValueAction(list);
    store.dispatch(action);
  }
  render() {
    return (
      <Fragment>
        <EditTodoItemPanel 
          flag={this.state.panelFlag} 
          handleAddOk={this.handleAddOk}
          handleAddExit={this.handleAddExit}
        />
        <TodoListUI 
          todolist={this.state.todolist}
          didlist={this.state.didlist}
          count={this.state.todolist.length}
          handleAddTodoItemClick={this.handleAddTodoItemClick}
        />
      </Fragment>
    );
  }
  handleStoreChange() {
    const state = store.getState();

    const todolist = state.list
      .map((item, index) => Object.assign({index: index}, item))
      .filter((item)=> (item.status === 0));
    
    const didlist = state.list
      .map((item, index) => Object.assign({index: index}, item))
      .filter((item)=> (item.status === 1));
  
    this.setState(()=>({
      todolist,
      didlist
    }));
  }
  handleAddTodoItemClick() {
    this.setState((preState) => ({
      panelFlag: true
    }));
  }
  handleAddExit() {
    this.setState(()=>({
      panelFlag: false
    }));
  }
}

export default TodoList;