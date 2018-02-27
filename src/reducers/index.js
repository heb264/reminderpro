import {ADD_REMINDER, DELETE_REMINDER} from '../constants';
import {bake_cookies, read_cookie} from 'sfcookies';
const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
}
const removeById = (state =[], id) => {
  const reminders = state.filtered(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      //console.log('reminders as state', reminders);
      bake_cookies('reminders', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookies('reminders', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
