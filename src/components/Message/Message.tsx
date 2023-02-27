import Header from "../GeneralComponents/Header";
import './Messages.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";
import userService from "../../api/services/user.service";
import { useState } from "react";
import UsersList from "./UsersList/UserList";

const Message = () => {
  

const [ showFriends , SetShowFriends ] = useState<boolean>(false)
const [ showSearch , SetShowSearch ] = useState<boolean>(false)


const defultNavBarStyle = "text-center text-[1.25rem] py-3 md:py-4 z-30 w-2/12 cursor-pointer text-white";

    return (
    <>
  
         <Header/> 
    
       <div className="w-full z-20 h-screen  flex flex-col justify-start">
        
         <div className="MESSANGER_CONTAINER  w-full flex flex-row md:flex-col justify-between md:justify-start h-screen overflow-hidden">
            
            <div className="w-[30%] md:w-full bg-[#121212] boxshadow3 flex flex-col overflow-scroll border-r-[5px] border-r-solid border-r-[#212121]">
          
           <div className="flex flex-row justify-center">
                <p className={`text-center ${showFriends ? 'text-[#e6e6e6]' : 'text-[#989898]'} transition-all duration-200 py-3 w-3/12 text-[1.25rem] z-30 cursor-pointer boxshadow3 `} onClick={() => {SetShowFriends(true);SetShowSearch(false) }}>Friends</p>
                <p className={`text-center ${showSearch ? 'text-[#e6e6e6]' : 'text-[#989898]'} transition-all duration-200 py-3 w-3/12 text-[1.25rem] z-30 cursor-pointer boxshadow3 `} onClick={() => {SetShowSearch(true);SetShowFriends(false)}}>Serach</p>
           </div>
              
            { showFriends && <FriendsList /> }
            { showSearch && <UsersList /> }
           </div>
           

           <div className="w-[75%] left-[30%] md:left-0 md:mt-[3.5rem] md:w-full bg-[#151515] boxshadow3 z-20  flex flex-row justify-center fixed ">
         
             <NavLink to="/Messages/Global" className={(navData) => (navData.isActive ? `${defultNavBarStyle} border-b-[green] border-b-solid border-b-[1px]` : `${defultNavBarStyle} text-[#9b9b9b]`)} >
               <p >Global</p>
             </NavLink> 
             <NavLink to="/Messages/Chat" className={(navData) => (navData.isActive ? `${defultNavBarStyle} border-b-[green] border-b-solid border-b-[1px]` : `${defultNavBarStyle} text-[#9b9b9b]`)} >
               <p >Chat</p>
             </NavLink> 
             <NavLink to="/Messages/Groups" className={(navData) => (navData.isActive ? `${defultNavBarStyle} border-b-[green] border-b-solid border-b-[1px]` : `${defultNavBarStyle} text-[#9b9b9b]`)} >
               <p >Group</p>
             </NavLink> 
         
           </div>
            
          <Outlet />
          
         </div>

       </div>
     
    
    </>)
}

export default Message;