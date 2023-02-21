import { useEffect, useState , useRef } from "react"
import { socket } from "../../Socket/socket";
import Header from "../GeneralComponents/Header";
import './Messages.css';

const Message = () => {
   
const [ messageList , SetMessageList ] = useState<any>([]);
const [ newMessage  , SetNewMessage ] = useState<any>({});
const [ message  , SetMessage ] = useState<string>('');


const messageContainerRef = useRef<any>(null)

    useEffect(() => {
      
      
        message && socket.emit('message' , newMessage)
      //   socket.off('getMyMessage').on('getMyMessage', ( data : any ) => {
      //    console.log('My Message : ' + " " + data)
      //    })
      getGlobalMessage();

   }, [ newMessage ])
   

const getGlobalMessage = () => {
   socket.off('getGlobalMessage').on('getGlobalMessage', ( data : any ) => {
      console.log(data);
      let list = data.map(( item : any) => (
     
     item.user === localStorage.getItem('userName') ?
       <div className="flex flex-wrap justify-end ml-[48%] max-w-[50%]"> 
          <span className=" text-[#3a3a3a] pt-[3.5rem] mr-2">12:48</span>
         <p style={{lineBreak: 'anywhere'}} className="message px-3 pt-4 text-white text-center mt-5  rounded-b-[25px] rounded-tl-[25px]">{item.text}</p>
       </div>
         :
       <div className="flex flex-wrap max-w-[50%]"> 
            <p style={{lineBreak: 'anywhere'}} className="bg-[#4b4b4bce] px-3 pt-4 text-white text-center mt-5 ml-5 rounded-b-[25px] py-2 rounded-tr-[25px]">{item.text}</p>
            <span className=" text-[#3a3a3a] pt-[3.5rem] pl-2">12:48</span>
       </div>
      ))
      
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
      
      SetMessageList(list);
      SetMessage('');
     })
   }

   useEffect(() => {
      console.log('Mounting...');
      
       getGlobalMessage();
   } , [])
   


    return (
    <>
       
         <Header/> 
      
    
       <div className="w-full z-20 h-screen  flex flex-col justify-start">
        
       <div className="MESSANGER_CONTAINER   w-full h-[40rem] flex flex-row mt-[2rem] ">
            
            <div className="bg-[#0f0f0f] rounded-[20px] w-[30%] mx-auto boxshadow3">
               <p className="text-center py-5 text-[1.5rem] z-30 boxshadow3 text-[#9b9b9b]  border-b-[1px] border-b-solid border-b-[#222222]">Friends</p>
            </div>
            
            <div ref={messageContainerRef} className="messageBody pt-[3rem] pb-[10rem] rounded-[20px] text-center text-white w-[55%]  mx-auto boxshadow3 relative flex flex-col">
            
            {messageList}
          
           <div className="fixed w-[55%] bg-[#8c8888] top-[85%] flex flex-row boxshadow3 border-solid border-[1px] border-[#232323] ">
             <input onChange={(e) => SetMessage(e.target.value)} value={message} className="bg-[#000000e6] w-10/12 outline-none pl-4 py-5 " placeholder="Send Message Here ..."/>
             <button onClick={() => {SetNewMessage({text : message , user : localStorage.getItem('userName')});   }} className="bg-[#2155da] w-2/12 text-white px-5">SEND</button></div> 
           </div>
       </div>

       </div>
     
    
    </>)
}

export default Message;