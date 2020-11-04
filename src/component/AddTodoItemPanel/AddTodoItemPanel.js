import React from 'react';
import {Input, Button} from 'antd';
import { DatePicker } from 'antd';
import store from '../../store'
import actionCreators from '../../store/actionCreators'
import './style.css'

class AddTodoItemPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      dateString: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onOk = this.onOk.bind(this);
  }
  render() {
    if (this.props.flag) {
      return (
        <div className="AddPanel">
          <div className="Panel">
            <Input.TextArea
              autoSize
              onChange={this.onInputChange}
              placeholder="请输入Item"
              value={this.state.inputValue}
            />
            <div>
              <DatePicker showTime onChange={this.onDateChange}/>
              <Button onClick={this.onOk}>保存</Button>
              <Button onClick={this.props.handleAddExit}>退出</Button>
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
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
      
      const action = actionCreators.getAddTodoItemAction(this.state.inputValue, this.state.dateString);
      store.dispatch(action);
      
      if(window.localStorage){
        window.localStorage.setItem('list', JSON.stringify(store.getState().list));
      }

      this.setState(()=>({
        inputValue: '',
        dateString: ''
      }))
      this.props.handleAddExit();
    }
  }
}
export default AddTodoItemPanel;