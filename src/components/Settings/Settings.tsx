import { useEffect, useState } from "react";
import Header from "../GeneralComponents/Header";
import { profileImageHandler } from '../../Redux/Reducers/Settings/Profile/ProfileSettings';
import { useDispatch, useSelector } from "react-redux";


const Settings = () => {
   
const [ showProfileSetting , SetShowProfileSetting ] = useState<boolean>(false);

const selectState :any = useSelector(profileImageHandler);
const profileImageState = selectState.payload.ProfileSettings.profileImage;

const SetProfileImage = useDispatch();

const getBase64 = ( file : any ) => {
    return new Promise(resolve => {
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(baseURL);
        let {result} = reader
        SetProfileImage(profileImageHandler(result));
      };
    });
  };


  useEffect(() => {
  },[ profileImageState ])


    return (
    <div className="w-full">

        <Header/>
      
     { !showProfileSetting && <div className="w-full flex flex-col justify-around text-[2rem] text-[#8d8d8d] font-[600] tracking-[1px]">
         <div onClick={() => SetShowProfileSetting(true)} className="w-5/12 mx-auto mt-[3rem] bg-[#222225d8] hover:bg-[#1b1b1ed8] transition-all duration-200 cursor-pointer rounded-[10px] pl-6 p-4 boxshadow4">
           Profile
        </div>
      </div>}

     { showProfileSetting && 
     <div className="w-full flex flex-col">

<div className="w-6/12 mx-auto mt-[3rem] flex flex-row justify-between ">
  <label className=" bg-gradient-to-r from-[#30a362] to-[green]  font-[600] text-[1.5rem] px-5 text-[white] h-[4rem] mt-[3rem] border-none rounded-[10px] boxshadow2 hover:scale-110 duration-200 p-3 transition-all cursor-pointer">
    <input type="file" className="hidden" onChange={(e) => e.target.files && getBase64(e.target.files[0])}/>
     Upload +
  </label>

  <div className="bg-transparent p-1 border-[2px] border-solid border-[#353535] h-[10rem] w-[10rem] rounded-[50%] boxshadow3">
    <img src={profileImageState} className='rounded-[50%]' />
  </div>

</div>

<button className="w-2/12 mx-auto mt-[5rem] bg-gradient-to-r from-[#3073a3] to-[#002980]  font-[600] text-[1.5rem] px-3 text-[white]   border-none rounded-[10px] boxshadow2 hover:scale-105 pb-2 duration-200 p-1 transition-all">Save</button>

     </div> }

        </div>    
    )

}

export default Settings; 