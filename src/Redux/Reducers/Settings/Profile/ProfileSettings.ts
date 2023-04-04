import { createSlice } from '@reduxjs/toolkit'

export const ProfileSettings = createSlice({
  name: 'ProfileSetting',
  initialState: {
    profileImage: '',
    name : '',
    email : '',
    mobile : ''
  },
  reducers: {
    profileImageHandler: (state : any , action : any) => {
      state.profileImage = action.payload
    },
    nameHandler: (state : any , action : any) => {
      state.name = action.payload
    },
    emailHandler: (state : any , action : any) => {
      state.email = action.payload
    },
    mobileHandler: (state : any , action : any) => {
      state.mobile = action.payload
    },
  },
})


export const { profileImageHandler , nameHandler , emailHandler , mobileHandler} = ProfileSettings.actions;
export default ProfileSettings.reducer;