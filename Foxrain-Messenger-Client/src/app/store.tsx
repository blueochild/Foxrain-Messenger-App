import { combineReducers, configureStore } from '@reduxjs/toolkit'
import SignupReducer from '../features/user/signupSlice'
import UsersReducer from '../features/user/userManagementSlice'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from 'redux-persist/es/persistStore';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  signup: SignupReducer,
  users: UsersReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // }),
    }).concat(logger),
});


export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;