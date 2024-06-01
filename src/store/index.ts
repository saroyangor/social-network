import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './profileSlice';

const store = configureStore({
  reducer: {
    profiles: profileReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
