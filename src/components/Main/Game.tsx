import { socket } from "../../Socket/socket";
import { useEffect, useState } from "react";


const Game = () : any => {
  
     const [ gameValue , SetGameValue ] = useState<any>(0)

useEffect(() => {
 socket.off('test').on('test', async ( data : any ) => {
     SetGameValue(data);
     console.log(data)
 })
}, [ gameValue ])

   
    return (
    <>
    
    <div className='text-center text-white pt-5'> Game Page </div>

    <p className="text-[green] text-center text-[2rem] mt-[10rem]">{`${gameValue} X`}</p>


    </>
  


 )
}

export default Game;