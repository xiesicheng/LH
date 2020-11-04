import {ADD_TODO_ITEM, INIT_LIST_VALUE} from './actionType'

const defaultState = {
  list: [
    {
      content: '好好吃饭',
      time: '2020-10-20 14:24:22',
      status: 0
    },
    {
      content: '不好好吃饭',
      time: '2020-10-20 14:22:22',
      status: 1
    }
  ]
}

const reducer = (state = defaultState, action) => {
  if (action.type === INIT_LIST_VALUE) {
    const newState = DeepClone(state);
    newState.list = action.list;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = DeepClone(state);
    newState.list.push({
      content: action.content,
      time: action.dateString,
      status: 0
    })
    return newState;
  }
  return state;
};

// const handleAction = {
//   [INIT_LIST_VALUE]() 
// }

function DeepClone(obj) {
  // return JSON.parse(JSON.stringify(obj));
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') { //数组与Obj 都是 object
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = DeepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

export default reducer;