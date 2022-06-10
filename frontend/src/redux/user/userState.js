import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/constant";

const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null

export const login = createAsyncThunk(
    '/login',
    async (data, { rejectWithValue }) => {
        const rs = await axios.post(`${apiUrl}/login`, data)
        if (rs.status < 200 || rs.status >= 300) {
            return rejectWithValue(rs)
        }
        return rs.data
    }
)
export const userState = createSlice({
    name: 'userState',
    initialState: {
        loading: false,
        user: user,
        errorMess: ""
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.errorMess = "";
            localStorage.removeItem('user')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, state => {
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.errorMess = action.payload;
            
        });
    }
})
export const { logout } = userState.actions
export default userState.reducer