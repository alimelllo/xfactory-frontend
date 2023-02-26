import Header from "../GeneralComponents/Header";
import './Messages.css';
import { Link, NavLink, Outlet } from "react-router-dom";


const Message = () => {
   
const defultNavBarStyle = "text-center text-[1.25rem] py-3 md:py-4 z-30 w-2/12 cursor-pointer text-white";

    return (
    <>
  
         <Header/> 
    
       <div className="w-full z-20 h-screen  flex flex-col justify-start">
        
         <div className="MESSANGER_CONTAINER  w-full flex flex-row md:flex-col justify-between md:justify-start h-screen overflow-hidden">
            
            <div className="w-[30%] md:w-full bg-[#121212] boxshadow3">
               <p className="text-center py-3 text-[1.25rem] z-30 text-[#9b9b9b] boxshadow3 ">Friends</p>
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