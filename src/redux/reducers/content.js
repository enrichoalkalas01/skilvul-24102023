import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    contents: [],
    isLoading: false,
    error: null,
    name: null,
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/photos')
        console.log(res)
        const data = await res.data
        return data
    }
)

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: function(builder) {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
            state.name = 'Enricho Alkalas'
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false
            console.log(action.error)
            state.error = action.error.message
        })
    }
})
  
export default contentSlice.reducer