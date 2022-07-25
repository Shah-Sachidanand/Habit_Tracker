import { combineReducers } from 'redux';
import { habits } from './Habits';

//add reducers- currently only one - goals
export default combineReducers({
  habits,
});
