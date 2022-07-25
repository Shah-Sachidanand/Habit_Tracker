import { UPDATE_STATUS, ADD_HABIT, DELETE_HABIT } from './Actions';

//Update status
export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status,
  };
}

//Add Habit
export function addHabit(goal) {
  return {
    type: ADD_HABIT,
    goal,
  };
}

//Delete Habit
export function deleteHabit(goal) {
  return {
    type: DELETE_HABIT,
    goal,
  };
}
