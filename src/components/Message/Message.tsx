import { useEffect, useState } from "react"
import { socket } from "../../Socket/socket";
import Header from "../GeneralComponents/Header";

const Message = () => {
   
const [ messageList , SetMessageList ] = useState<any>([]);
const [ newMessage  , SetNewMessage ] = useState<string>('');
const [ message  , SetMessage ] = useState<string>('');

    useEffect(() => {
        message && socket.emit('message' , message)
        socket.off('getMyMessage').on('getMyMessage', ( data : any ) => {
         console.log('My Message : ' + " " + data)
         })
        socket.off('getGlobalMessage').on('getGlobalMessage', ( data : any ) => {
         console.log('Gloabl Message : ' + " " + data);
         let list = data.map(( item : any) => (
            <div className="bg-[#4a854a] text-white text-center min-w-[5rem] max-w-[20rem] mt-5 ml-5 rounded-b-[20px] py-2 rounded-tr-[20px]">
               {item}
            </div>
         ))
         SetMessageList(list)
        })

   }, [ newMessage ])
   
   
    return (
    <>
       
         <Header/> 
      
    
       <div className="w-full z-20 h-screen  ">
        
       <div className="MESSANGER_CONTAINER  w-full h-[30rem] flex flex-row mt-[2rem] ">
          <div className="bg-[#151515] rounded-[20px] text-center text-white w-[25%] mx-auto boxshadow3">User</div>
          <div className="bg-[#151515] rounded-[20px] text-center text-white w-[65%] mx-auto boxshadow3 relative overflow-hidden">
            {messageList}
          
          
           <div className="w-full bg-[#060606] absolute top-[90%] flex flex-row h-[5rem] boxshadow3"><input onChange={(e) => SetMessage(e.target.value)} className="bg-[#1d1d1d] w-full rounded-bl-[20px] pb-[2rem] outline-none pl-4 " placeholder="Send Message Here ..."/><button onClick={() => SetNewMessage(message)} className="bg-[#46469c] text-white pb-[2rem] px-5">SEND</button></div> 
          </div>
       </div>

       </div>
     
    
    </>)
}

export default Message;