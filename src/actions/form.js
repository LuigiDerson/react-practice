import { createSlice, configureStore } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    getUsers: (state) => state,
  },
})

const { actions, reducer } = usersSlice
const { getUsers } = actions

const store = configureStore({
  reducer,
})

export default store
