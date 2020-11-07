import React, {Component, Fragment} from 'react';
import PanelUI from './PanelUI'

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: '',
    };
    this.handleExit = this.handleExit.bind(this);
  }
  render() {
    let component = this.props.isShow ?
      <Panel 
        content={this.props.content}
        handleExit={this.handleExit}
      /> : null;
    return (
      {component}
    )
  }
  handleExit() {
    this.setState(()=>({
      isShow: false
    }));
  }
}

export default Panel;