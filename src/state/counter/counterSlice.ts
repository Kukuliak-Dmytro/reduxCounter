import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState{
    value:number;
    loading?:boolean;
}
const initialState:CounterState={
    value:0,
    loading:false
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value+=action.payload
        },
        decrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value-=action.payload 
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(incrementAsync.pending,(state)=>{state.loading=true})
        .addCase(decrementAsync.pending,(state)=>{state.loading=true})
        .addCase(incrementAsync.fulfilled,(state,action:PayloadAction<number>)=>{
            state.value+=action.payload
            state.loading=false
        })
        .addCase(decrementAsync.fulfilled,(state,action:PayloadAction<number>)=>{
            state.value+=action.payload
            state.loading=false
        })
    }
    
});
export const decrementAsync=createAsyncThunk(
    "counter/decrementAsync",
    async (amount:number)=>{
        await new Promise((resolve)=>setTimeout(resolve,1000));
        return amount;
    }
)
export const incrementAsync=createAsyncThunk(
    "counter/incrementAsync",
    async (amount:number)=>{
        await new Promise((resolve)=>setTimeout(resolve,1000));
        return amount;
    }
)
export const {increment,decrement, incrementByAmount,decrementByAmount}=counterSlice.actions;
export default counterSlice.reducer;