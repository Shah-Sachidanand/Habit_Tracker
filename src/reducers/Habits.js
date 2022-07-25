import { UPDATE_STATUS, ADD_HABIT, DELETE_HABIT } from '../actions/Actions';

// initial habit state
const initialState = {
  habits: [],
};

//to update store- actions- add,update,remove habit
export function habits(state = initialState, action) {
  switch (action.type) {
    //add habit
    case ADD_HABIT:
      return {
        habits: [...state.habits, action.habit],
        flag: false,
      };

    //update habit
    case UPDATE_STATUS:
      //update status of habit
      let updated = state.habits.map((habit) => {
        if (habit.title === action.status[1]) {
          habit.status[action.status[2]] = action.status[0];

          if (habit.status[action.status[2]] === 'Done') {
            habit.streak += 1;
          } else if (
            habit.status[action.status[2]] === 'None' ||
            habit.status[action.status[2]] === 'Not-Done'
          ) {
            habit.streak -= 1;
          }
        }
        return habit;
      });
      return {
        habits: updated,
      };

    //delete habit
    case DELETE_HABIT:
      let filtered = state.habits.filter((habit) => habit.key !== action.habit.key);
      return {
        flag: false,
        habits: filtered,
      };
    default:
      return state;
  }
}
