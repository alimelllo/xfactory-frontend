import { useEffect, useState , useRef } from "react"
import messageService from "../../../api/services/message.service";
import { socket } from "../../../Socket/socket";

import ReactLoading from "react-loading";

const GlobalMessage = () => {

    const [ isLoading , SetIsLoading ] = useState<boolean>(false)

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
             <p style={{lineBreak: 'anywhere'}} className="message px-3 p-4  text-white text-center mt-5  rounded-b-[25px] rounded-tl-[25px]">{item.text}</p>
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
        SetIsLoading(true);
          messageService.getAllMessages().then(( result ) => {
            console.log(result);
            
            let list = result.data.map(( item : any) => (
         
              item.user === localStorage.getItem('userName') ?
                <div className="flex flex-wrap justify-end ml-[48%] max-w-[50%] mr-1"> 
                  <p style={{lineBreak: 'anywhere'}} className="message px-3 p-4 pb-5 text-white text-center mt-5 rounded-b-[25px] rounded-tl-[25px]">{item.text}</p>
                </div>
                  :
                <div className="flex flex-wrap max-w-[50%]"> 
                  <p style={{lineBreak: 'anywhere'}} className="bg-[#4b4b4bce] pb-5 px-3 pt-4 text-white text-center mt-5 ml-5 rounded-b-[25px] py-2 rounded-tr-[25px]">{item.text}</p>
                </div>
               ))
               
               messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
               SetMessageList(list);
               SetIsLoading(false)
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
        
     <div ref={messageContainerRef} className="messageBody pb-[15rem] text-center text-white w-[70%] md:w-full relative flex flex-col h-screen">
         

          { !isLoading && <div className="mt-[4rem]">{messageList}</div>}
          
          { isLoading && <ReactLoading type={"spinningBubbles"} color="white" className="m-auto" />}
          
          { isTyping &&
           <div className="flex flex-wrap max-w-[50%]"> 
                 <p style={{lineBreak: 'anywhere'}} className="bg-[#3c3c3c3c] px-4 p-2 text-white text-center mt-5 ml-5 rounded-b-[25px] rounded-tr-[25px]">{isTypingFrom}</p>
            </div>
            }
             <div className="fixed w-full top-[89%] md:top-[90%] flex flex-row boxshadow3">
               <input onChange={(e) => { SetMessage(e.target.value) }} value={message} className="bg-[#151517f9] text-[1.25rem] w-[62%] md:w-[75%] outline-none pl-4 py-5 " placeholder="Send Message Here ..."/>
               <button onClick={() => {SetNewMessage({text : message , user : localStorage.getItem('userName')}); }} className="bg-[#2c09a9] hover:bg-[#22179e] hover:tracking-[1px]  transition-all duration-200 cursor-pointer w-1/12 md:w-3/12 text-white text-center">SEND</button>
             </div> 
           
    </div>
          
           
         )
}

export default GlobalMessage;