import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import SignupReducer from '../features/user/signupSlice'
import UsersReducer from '../features/user/userManagementSlice'
import UserSignin from '../features/user/signinSlice'
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ["users", "signup"]
};

const rootReducer = combineReducers({
  signup: SignupReducer,
  users: UsersReducer,
  signin: UserSignin
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;