import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// creact action 
const base_url = "https://fuirniflex-backend.onrender.com";

//get_producct 
  export const getproduct = createAsyncThunk('product/getproduct',async(_,{getstate,rejectWithValue})=>{
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get( `${base_url}/api/getproduct`,{
            headers: {
              Authorization: `Token ${token}`,}
    })
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch users');
        
    }
})

export const getsinleproduct = createAsyncThunk('product/getsingleproduct',async({id},{getstate,rejectWithValue})=>{
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get( `${base_url}/api/getproduct/${id}`,{
            headers: {
              Authorization: `Token ${token}`,}
    })
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch users');
        
    }
})

const initialState = {

    products :[],
    status:'idle',
    error:null
}



const productdata = createSlice({
    name: 'item',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getproduct.pending,(state)=>{
            state.status ='loading'
        }
        )
        .addCase(getproduct.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.products = action.payload
        })
        .addCase(getproduct.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message
        })
        .addCase(getsinleproduct.pending,(state)=>{
            state.status ='loading'
        }
        )
        .addCase(getsinleproduct.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.products = action.payload
        })
        .addCase(getsinleproduct.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message
        })
       

    }
})


export default productdata.reducer