import { useEffect, useState , useRef } from "react"
import messageService from "../../api/services/message.service";
import { socket } from "../../Socket/socket";
import Header from "../GeneralComponents/Header";
import './Messages.css';

const Message = () => {
   
const [ messageList , SetMessageList ] = useState<any>([]);
const [ newMessage  , SetNewMessage ] = useState<any>({});
const [ message  , SetMessage ] = useState<string>('');
const [ isTyping  , SetIsTyping ] = useState<boolean>(false);
const [ isTypingFrom  , SetIsTypingFrom ] = useState<boolean>(false);

const messageContainerRef = useRef<any>(null);



    
useEffect(() => {
        message && socket.emit('message' , newMessage);
   }, [ newMessage ])
  
   
  

   socket.off('getGlobalMessage').on('getGlobalMessage', async ( data : any ) => {
     console.log(data);
      let list = data.map(( item : any) => (
     
     item.user === localStorage.getItem('userName') ?
       <div className="flex flex-wrap justify-end ml-[48%] max-w-[50%]"> 
         <p style={{lineBreak: 'anywhere'}} className="message px-3 p-4 text-white text-center mt-5  rounded-b-[25px] rounded-tl-[25px]">{item.text}</p>
       </div>
         :
       <div className="flex flex-wrap max-w-[50%]"> 
         <p style={{lineBreak: 'anywhere'}} className="bg-[#4b4b4bce] px-3 p-4 text-white text-center mt-5 ml-5 rounded-b-[25px] rounded-tr-[25px]">{item.text}</p>
       </div>
      ))
      
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
      
      SetMessageList(list);
      SetMessage('');
     })
   

   useEffect(() => {
  
      messageService.getAllMessages().then(( result ) => {
        console.log(result);
        
        let list = result.data.map(( item : any) => (
     
          item.user === localStorage.getItem('userName') ?
            <div className="flex flex-wrap justify-end ml-[48%] max-w-[50%] mr-1"> 
              <p style={{lineBreak: 'anywhere'}} className="message px-3 p-4 text-white text-center mt-5 rounded-b-[25px] rounded-tl-[25px]">{item.text}</p>
            </div>
              :
            <div className="flex flex-wrap max-w-[50%]"> 
              <p style={{lineBreak: 'anywhere'}} className="bg-[#4b4b4bce] px-3 pt-4 text-white text-center mt-5 ml-5 rounded-b-[25px] py-2 rounded-tr-[25px]">{item.text}</p>
            </div>
           ))
           
           messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
           SetMessageList(list);
      })
     
   } , [])
   

useEffect(() => {
  message && socket.emit('imTyping' , localStorage.getItem('userName'));
    !message && socket.emit('imTyping' , false);
  socket.on('isTyping' , ( name : any) => {
    name ? SetIsTyping(true) : SetIsTyping(false);
     SetIsTypingFrom(name)
  }) 
} , [ message ]);


    return (
    <>
       
         <Header/> 
      
    
       <div className="w-full z-20 h-screen  flex flex-col justify-start">
        
       <div className="MESSANGER_CONTAINER  w-full flex flex-row md:flex-col justify-between md:justify-start h-screen overflow-hidden">
            
            <div className="w-[30%] md:w-full bg-[#151515] boxshadow3">
               <p className="text-center py-3 text-[1.25rem] z-30 text-[#9b9b9b] boxshadow3 ">Friends</p>
            </div>
            
            <div ref={messageContainerRef} className="messageBody pb-[15rem] text-center text-white w-[70%] md:w-full relative flex flex-col h-screen">
            
            <div className="w-[75%] md:w-full bg-[#151515] boxshadow3 z-20  flex flex-row justify-center fixed ">
               <p className="text-center text-[1.25rem] py-3 z-30 text-[#9b9b9b] w-2/12 cursor-pointer">Global</p>
               <p className="text-center text-[1.25rem] py-3 z-30 text-[#9b9b9b] w-2/12">Chat</p>
               <p className="text-center text-[1.25rem] py-3 z-30 text-[#9b9b9b] w-2/12">Group</p>
            </div>

            <div className="mt-[4rem]">{messageList}</div>
          
          { isTyping &&
           <div className="flex flex-wrap max-w-[50%]"> 
                 <p style={{lineBreak: 'anywhere'}} className="bg-[#3c3c3c3c] px-4 p-2 text-white text-center mt-5 ml-5 rounded-b-[25px] rounded-tr-[25px]">{isTypingFrom}</p>
            </div>
            }
             <div className="fixed w-full top-[89%] md:top-[90%] flex flex-row boxshadow3">
               <input onChange={(e) => { SetMessage(e.target.value) }} value={message} className="bg-[#242323af] text-[1.25rem] w-[62%] md:w-[75%] outline-none pl-4 py-5 " placeholder="Send Message Here ..."/>
               <button onClick={() => {SetNewMessage({text : message , user : localStorage.getItem('userName')}); }} className="bg-[#2c09a9] hover:bg-[#22179e] hover:tracking-[1px]  transition-all duration-200 cursor-pointer w-1/12 md:w-3/12 text-white text-center">SEND</button>
             </div> 
           
           </div>
       </div>

       </div>
     
    
    </>)
}

export default Message;