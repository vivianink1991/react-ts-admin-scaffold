import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Lily',
    role: [],
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.name = action.payload.name
      state.role = action.payload.role
    },
  },
})

export const { setUserInfo } = userSlice.actions // return action creator which has the same name of reducer
export default userSlice.reducer
