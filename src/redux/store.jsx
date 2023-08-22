import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greet/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});
export default store;