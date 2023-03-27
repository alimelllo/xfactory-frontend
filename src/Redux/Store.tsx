import { configureStore } from '@reduxjs/toolkit';
import CardsGame from './Reducers/CardsGame/CardsGame';
import ProfileSettings from './Reducers/Settings/Profile/ProfileSettings';

export default configureStore({
  reducer: {
    CardsGame ,
    ProfileSettings
  },
})