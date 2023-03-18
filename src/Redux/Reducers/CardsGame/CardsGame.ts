import { createSlice } from '@reduxjs/toolkit'

export const CardGame = createSlice({
  name: 'CardGame',
  initialState: {
    canPlayValue: false,
    cardOutValue : false, 
  },
  reducers: {
    canPlay: (state : any , action : any) => {
      state.canPlayValue = action.payload
    },
    cardOut: (state : any , action : any) => {
        state.cardOutValue = action.payload
    },
  },
})


export const { canPlay } = CardGame.actions;
export default CardGame.reducer;