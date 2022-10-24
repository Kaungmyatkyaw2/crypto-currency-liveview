import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    org:[],
    toShow:[],
    count:25,
    eachCoin:{},
}

const CoinSlicer = createSlice({
    name:"coin",
    initialState,
    reducers:{
        getCoins : (state,action) => {
            state.org = action.payload
            state.toShow = state.org.slice(0,state.count)
        },
        search:(state,action) => {
            (action.payload.length != 0) ? state.toShow = state.org.filter(i => i.name.toLowerCase().includes(action.payload)) : state.toShow = state.org.slice(0,state.count)
        },
        viewMore:(state,action) => {
            state.toShow = state.org.slice(0,state.count+=action.payload)
        },
        getEachCoin:(state,action) => {
            state.eachCoin = action.payload
        }
    }
})

export default CoinSlicer.reducer
export const {getCoins,search,viewMore,getEachCoin} = CoinSlicer.actions