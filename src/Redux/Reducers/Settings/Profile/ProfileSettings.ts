import { createSlice } from '@reduxjs/toolkit'

export const ProfileSettings = createSlice({
  name: 'ProfileSetting',
  initialState: {
    profileImage: '',
  },
  reducers: {
    profileImageHandler: (state : any , action : any) => {
      state.profileImage = action.payload
    },
    
  },
})


export const { profileImageHandler } = ProfileSettings.actions;
export default ProfileSettings.reducer;