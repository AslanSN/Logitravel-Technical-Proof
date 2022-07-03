import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/reducers/itemSlice';
import modalReducer from '../features/reducers/modalSlice';

export const store = configureStore({
  reducer: {
    items: itemReducer,
    modal: modalReducer,
  },
});
