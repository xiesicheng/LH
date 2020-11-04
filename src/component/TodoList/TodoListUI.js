// import {Input, Button, List} from 'antd';
import React from 'react';
import Header from '../Header/Header'
import AddTodoItem from '../AddTodoItem/AddTodoItem.js'
import TodoItemList from '../TodoItemList/TodoItemList'

function TodoList(props) {
  let Cmp1 = props.todolist.length > 0 ? 
    <TodoItemList
      title="待办事项"
      list={props.todolist} 
    />: null;

  let Cmp2 = props.didlist.length > 0 ?
    <TodoItemList
      itemStyle={{textDecoration: 'line-through'}}
      title="已完成事项"
      checked={true}
      list={props.didlist} 
    /> : null;

  return (
    <div className="TodoList" style={{width: '600px', margin: '0 auto'}}>
      <Header count={props.count}/>
      <hr/>
      <AddTodoItem handleClick={props.handleAddTodoItemClick}/>
      {Cmp1}
      {Cmp2}
    </div>
  );
}

export default TodoList;
