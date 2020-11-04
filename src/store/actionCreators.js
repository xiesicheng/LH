import {ADD_TODO_ITEM, INIT_LIST_VALUE} from './actionType';

const actionCreators = {
  getInitListValueAction(list) {
    return {
      type: INIT_LIST_VALUE,
      list
    }
  },
  getAddTodoItemAction(content, dateString) {
    return {
      type: ADD_TODO_ITEM,
      content,
      dateString
    }
  }
}

export default actionCreators;