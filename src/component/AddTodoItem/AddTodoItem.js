import React, {Component} from 'react';
import './style.css'

class AddTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  render() {
    return (
      <div style={{display: 'flex', alignItem: 'center', justifyContent: 'flex-start'}}>
        <div className="newItemBtn" onClick={this.props.handleClick}>
          +新建待办
        </div>
      </div>
    )
  }
}

export default AddTodoItem;