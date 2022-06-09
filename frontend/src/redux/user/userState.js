import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/constant";

export const login = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue }) => {
        const rs = await axios.get(`${apiUrl}/product`, { data: data })
        if (rs.status < 200 || rs.status >= 300) {
            return rejectWithValue(rs.data)
        }
        return rs.data
    }
)
export const userState = createSlice({
    name: 'userState',
    initialState: {
        loading: false,
        user: null,
        errorMess: ""
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.errorMess = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, state => {
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload.message;
        });
    }
})

export default userState.reducer