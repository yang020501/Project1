import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    type: "",
    state: null
}

export const alertMessage = createSlice({
    name: 'alertMessage',
    initialState,
    reducers: {
        set: (state, action) => {
            state.message = action.payload.message
            state.type = action.payload.type
            state.state = true
        },
        remove: (state) => {
            state.state = false
        }
    }
})
export const { set, remove } = alertMessage.actions
export default alertMessage.reducer