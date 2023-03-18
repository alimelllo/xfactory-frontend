import { configureStore } from '@reduxjs/toolkit'
import CardsGame from './Reducers/CardsGame/CardsGame'

export default configureStore({
  reducer: {
    CardsGame 
  },
})