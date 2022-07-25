import { combineReducers } from 'redux';
import { habits } from './Habits';

//add reducers- currently only one - Habits
export default combineReducers({
  habits,
});
