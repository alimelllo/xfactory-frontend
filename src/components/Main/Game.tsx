import io from 'socket.io-client';
import { useEffect } from "react";

const Game = () : any => {
  
    const socket = io('localhost:8081');

    socket.on('GetCurrentRoom', ( obj : any ) => {
        console.log(obj);
       })
    
    

//     useEffect(() => {
      
//  } , [])
  
  
    return (
  <div className='text-center text-white pt-5'> Game Page </div>
 )
}

export default Game;