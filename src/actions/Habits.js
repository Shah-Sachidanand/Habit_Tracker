import { UPDATE_STATUS, ADD_HABIT, DELETE_HABIT } from './Actions';

//Update status
export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status,
  };
}

//Add Habit
export function addHabit(habit) {
  return {
    type: ADD_HABIT,
    habit,
  };
}

//Delete Habit
export function deleteHabit(habit) {
  return {
    type: DELETE_HABIT,
    habit,
  };
}
