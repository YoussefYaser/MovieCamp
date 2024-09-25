import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    imgCoverValue: '',
}

export const imgCoverSlice = createSlice({
    name: 'imgCover',
    initialState,
    reducers: {
        setImgCoverValue : (state, action)=>{
            state.imgCoverValue = action.payload;
        }
    },
})

export const { setImgCoverValue} = imgCoverSlice.actions;

export const imgCoverSliceReducer = imgCoverSlice.reducer;