import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/reducers/itemSlice';
import modalReducer from '../features/reducers/modalSlice';
import undoable from 'redux-undo';

export const store = configureStore({
  reducer: {
    items: undoable(itemReducer),
    modal: modalReducer,
  },
});
