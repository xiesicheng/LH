import React, { Fragment } from 'react';
import {Button} from 'antd';

const PanelUI = (props) => {
  return (
    <Fragment>
      {props.content}
      <Button>保存</Button>
      <Button onClick={props.handleExit}>退出</Button>
    </Fragment>
  );
}

export default PanelUI;