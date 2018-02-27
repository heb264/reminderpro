import {ADD_REMINDER, DELETE_REMINDER} from '../constants';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}
const removeById = (state =[], id) => {
  cosnt reminders = state.filtered(reminder => reminder.id != id);
  console.log('new reduced reminders', reminders);
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders as state', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
