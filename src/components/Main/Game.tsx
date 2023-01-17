import { socket } from "../../Socket/socket";
import { useEffect, useState } from "react";
import Header from "../GeneralComponents/Header";


const Game = () : any => {
  
     const [ gameValue , SetGameValue ] = useState<any>(0)

useEffect(() => {
     socket.off('test').on('test', async ( data : any ) => {
     SetGameValue(data);
     console.log(data);
})
}, [ gameValue ])

   
    return (
    <>
    <Header/>

    <div className="mt-[10rem] w-3/12  md:w-8/12 mx-auto h-[5rem]"><p className="text-[#38a6da] text-center rounded-[15px] text-[5rem] font-[600] boxshadow3">{`${gameValue} X`}</p></div>


    </>
  


 )
}

export default Game;