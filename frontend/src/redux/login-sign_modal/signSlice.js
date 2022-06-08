import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: null
}
export const signModal = createSlice({
    name: 'signModal',
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
export const { set, remove } = signModal.actions
export default signModal.reducer