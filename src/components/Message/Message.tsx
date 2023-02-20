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
          <span className=" text-[#3a3a3a] pt-[3rem]">12:48</span>
         <p style={{lineBreak: 'anywhere'}} className="message px-3 p-2 text-white text-center mt-5 ml-5 rounded-b-[25px] rounded-tl-[25px]">{item.text}</p>
       </div>
         :
       <div className="flex flex-wrap max-w-[50%]"> 
            <p style={{lineBreak: 'anywhere'}} className="bg-[#4b4b4bce] pb-3 p-2 text-white text-center mt-5 ml-5 rounded-b-[25px] py-2 rounded-tr-[25px]">{item.text}</p>
            <span className=" text-[#3a3a3a] pt-[3rem] pl-2">12:48</span>
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
      
    
       <div className="w-full z-20 h-screen">
        
       <div className="MESSANGER_CONTAINER  w-full h-[30rem] flex flex-row mt-[2rem] ">
            <div className="bg-[#151515] rounded-[20px] text-center text-white w-[25%] mx-auto boxshadow3">User</div>
            <div ref={messageContainerRef} className="messageBody pt-[3rem] pb-[10rem] rounded-[20px] text-center text-white w-[55%]  mx-auto boxshadow3 relative flex flex-col">
            
            {messageList}
          
           <div className="fixed w-[55%] bg-[#8c8888] top-[90%] flex flex-row boxshadow3">
             <input onChange={(e) => SetMessage(e.target.value)} value={message} className="bg-[#0d0d0dcf] w-10/12 outline-none pl-4 py-3 " placeholder="Send Message Here ..."/>
             <button onClick={() => {SetNewMessage({text : message , user : localStorage.getItem('userName')});   }} className="bg-[#46469c] w-2/12 text-white px-5">SEND</button></div> 
           </div>
       </div>

       </div>
     
    
    </>)
}

export default Message;