import React from 'react';
import { List } from 'antd'
import TodoItem from '../TodoItem/TodoItem'
const TodoItemListUI = (props) => {
  return (
    <div style={{width: '100%', display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <List
        header={<h2>{props.title}</h2>}
        style={{marginTop: '10px', width: '100%'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <TodoItem itemStyle={props.itemStyle} content={item.content} time={item.time} checked={props.checked} index={index}></TodoItem>
        )}
      />
    </div>
  )
}

export default TodoItemListUI;