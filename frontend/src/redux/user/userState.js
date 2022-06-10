import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/constant";

export const login = createAsyncThunk(
    '/login',
    async (data, { rejectWithValue }) => {
        console.log(data);
        const rs = await axios.post(`${apiUrl}/user/check_login` )
        if (rs.status < 200 || rs.status >= 300) {
            return rejectWithValue(rs.data)
        }
        console.log(rs.data);
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
            state.errorMessage = action.payload;
        });
    }
})

export default userState.reducer