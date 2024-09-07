import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "https://fuirniflex-backend.onrender.com";

const initialState = {
    token: null,
    status: 'idle',
    error: null
};

export const registeruser = createAsyncThunk('user/registeruser', async ({ name, email, phone, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${base_url}/api/register`, { name, email, phone, password });
        return response.data.user;
    } catch (error) {
        return rejectWithValue(error.response?.data?.detail || "Register Failed");
    }
});

export const loginuser = createAsyncThunk('user/loginuser', async ({ name, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${base_url}/api/login`, { name, password });
        console.log(response.data.token)
        return response.data.token;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to login');
    }
});

const userslice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registeruser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registeruser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(registeruser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Registration failed';
            })
            .addCase(loginuser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginuser.fulfilled, (state, action) => {
                console.log('Login Successful:', action.payload);
                state.status = 'succeeded';
                state.token = action.payload;
                console.log('Saving token to localStorage:', action.payload);
                localStorage.setItem('token', action.payload);
                state.error = null;
            })
            .addCase(loginuser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Login failed';
            });
    }
});

export const { logout } = userslice.actions;
export default userslice.reducer;
