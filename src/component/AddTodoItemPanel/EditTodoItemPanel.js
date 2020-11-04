import React from 'react';
import {Input, Button} from 'antd';
import { DatePicker } from 'antd';
import store from '../../store'
import actionCreators from '../../store/actionCreators'
import './style.css'

class EditTodoItemPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.inputValue || '',
      dateString: this.props.dateString || ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onOk = this.onOk.bind(this);
  }
  render() {
    let component = this.props.flag ?
        <div className="AddPanel">
          <div className="Panel">
            <Input.TextArea
              autoSize
              onChange={this.onInputChange}
              placeholder="请输入Item"
              value={this.state.inputValue}
            />
            <div>
              <DatePicker 
                showTime 
                value={this.dateString}
                onChange={this.onDateChange}
              />
              <Button onClick={this.onOk}>保存</Button>
              <Button onClick={this.props.handleAddExit}>退出</Button>
            </div>
          </div>
        </div> : null;
    return component;
  }
  onInputChange(e) {
    this.setState(()=> ({
      inputValue: e.target.value
    }));
  }
  onDateChange(moment, dateString) {
    this.setState(()=> ({
      dateString
    }));
  }
  onOk() {
    let flag = true;
    if (this.state.inputValue === '') {
      flag = false;
      alert('事项不能为空');
    }
    if (this.state.dateString === '') {
      flag = false;
      alert('日期不能为空');
    }
    if (flag) {
      // 添加数据
      if (this.props.onOk) { //利用Panel模块 处理edit事件
        this.props.onOk(this.state.inputValue, this.state.dateString);
        
        if(window.localStorage){
          window.localStorage.setItem('list', JSON.stringify(store.getState().list));
        }
      } else {
        const action = actionCreators.getAddTodoItemAction(this.state.inputValue, this.state.dateString);
        store.dispatch(action);
        
        if(window.localStorage){
          window.localStorage.setItem('list', JSON.stringify(store.getState().list));
        }
  
        this.setState(()=>({
          inputValue: '',
          dateString: ''
        }));
      }
      this.props.handleAddExit();
    }
  }
}
export default EditTodoItemPanel;