import { useEffect, useState } from "react";
import Header from "../GeneralComponents/Header";

import ProfileSettings from "./ProfileSettings/ProfileSettings";


const Settings = () => {
   
const [ showProfileSetting , SetShowProfileSetting ] = useState<boolean>(false);



    return (
    <div className="w-full">

        <Header/>
      
     { !showProfileSetting &&
      <div className="w-full flex flex-col justify-around text-[2rem] text-[#8d8d8d] font-[600] tracking-[1px]">
         <div onClick={() => SetShowProfileSetting(true)} className="w-5/12 mx-auto mt-[3rem] bg-[#222225d8] hover:bg-[#1b1b1ed8] transition-all duration-200 cursor-pointer rounded-[10px] pl-6 p-4 boxshadow4">
           Profile
        </div>
      </div> }

     { showProfileSetting &&  <ProfileSettings/> }

        </div>    
    )

}

export default Settings; 