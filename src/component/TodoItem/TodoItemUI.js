import React from 'react';
import { Checkbox, List, Button, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
/* params
  checked,
  content,
  time
*/

const TodoItemUI = (props) => {
  return (
    <List.Item
      actions={
        [
          <div>{props.time}</div>,
          <Tooltip title="edit">
            <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={props.handleEdit}/>
          </Tooltip>,
          <Tooltip title="delete">
            <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={props.handleDelete}/>
          </Tooltip>,
        ]
      }
    >
      <Checkbox 
        className="textShow" 
        checked={props.checked} 
        style={props.itemStyle}
        onClick={props.handleClick}
      >
        {props.content}
      </Checkbox>
    </List.Item>
  )
}
export default TodoItemUI;