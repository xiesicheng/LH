import {ADD_TODO_ITEM, COMPLETE_TODO_ITEM, DELETE_TODO_ITEM, EDIT_TODO_ITEM, INIT_LIST_VALUE} from './actionType';

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
  },
  getDeleteTodoItemAction(index) {
    return {
      type: DELETE_TODO_ITEM,
      index
    }
  },
  getCompleteTodoItemAction(index) {
    return {
      type: COMPLETE_TODO_ITEM,
      index
    }
  },
  getEditTodoItemAction(index, content, dateString) {
    return {
      type: EDIT_TODO_ITEM,
      index, content, dateString
    }
  }
}

export default actionCreators;