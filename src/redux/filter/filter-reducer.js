import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';

export const filterReducer = createReducer('', {
  [setFilter]: (_state, { payload }) => payload,
});

// const todosReducer = createReducer([], builder => {
//   builder.addCase('todos/todoAdded', (state, action) => {
//     // "mutate" the array by calling push()
//     state.push(action.payload);
//   });
// });
