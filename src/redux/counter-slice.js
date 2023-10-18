import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

//API Call
const counterApi = createAsyncThunk('/api/counter-api', async()=>{
    try{
    const URL = 'https://raw.githubusercontent.com/SeeunJung/counter-api/main/counter.json';
    const response = await fetch(URL);
    const data = await response.json();
    return data;
    }
    catch(err){
        throw err;
    }
})



//state: connect store
//action: data coming from components
//action contains data & data will get from payload
//so action contains payload
const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{count:0, isLoading: false, counter:0, error:null},

    //Sync reducers
    reducers:{
        plus(state, action){
            state.count = state.count + action.payload;
        },
        minus(state, action){
            state.count = state.count + action.payload;
        }
    },
    //Async calls extraReducers
    extraReducers:(builder)=>{
        builder.addCase(counterApi.pending, (state, action)=>{
            state.isLoading = true;
            state.counter = 0;
            state.message = '';
        }).addCase(counterApi.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.counter = action.payload.counter;
            state.message = action.payload.message;
        }).addCase(counterApi.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload.error;
        })
    }
});
export default counterSlice.reducer; //Consume/connect with store
export const {plus, minus} = counterSlice.actions;