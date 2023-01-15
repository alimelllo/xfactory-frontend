import { io, Socket } from 'socket.io-client';
import { useEffect } from "react";


const Game = () : any => {
  
    const socket = io('localhost:8081');

    // socket.on('test', ( data : any ) => {
    //      console.log(data);
    // })
  
    return (
  <div className='text-center text-white pt-5'> Game Page </div>
 )
}

export default Game;