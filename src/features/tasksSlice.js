import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // state = []
      // action = { payload: {name: test, desc: test} }
      state.value = [...state.value, action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask } = tasksSlice.actions

export default tasksSlice.reducer