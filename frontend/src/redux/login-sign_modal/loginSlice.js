import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: null
}



export const loginModal = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        set: (state) => {
            state.value = true
        },
        remove: (state) => {
            state.value = false
        }
    }
})
export const { set, remove } = loginModal.actions
export default loginModal.reducer