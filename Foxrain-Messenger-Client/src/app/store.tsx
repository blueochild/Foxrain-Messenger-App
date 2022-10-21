import { configureStore } from '@reduxjs/toolkit'
import SignupReducer from '../features/signup/signupSlice'
import UsersReducer from '../features/signup/userManagementSlice'

export const store = configureStore({
  reducer: {
    signup: SignupReducer,
    users: UsersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch