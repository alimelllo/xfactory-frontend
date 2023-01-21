import { socket } from "../../Socket/socket";
import { useEffect, useState } from "react";
import Header from "../GeneralComponents/Header";


const Game = () : any => {
  
     const [ gameValue , SetGameValue ] = useState<any>(0);
     const [ expired , SetExpired] = useState<boolean>(false);
     const [ loadingCountDown , SetLoadingCountDown ] = useState<number>(5);
     const [ loadingInterval , SetLoadingInterval] = useState<any>(null);

useEffect(() => {
     socket.off('gameValue').on('gameValue', async ( data : any ) => {
        if(data !== 'Expired'){
          SetGameValue(data);  
          SetExpired(false)
          SetLoadingCountDown(5);
        }
        if(data === 'Expired'){
            SetGameValue(data);
            SetExpired(true)
            handleLoadingForNextRound();
          }
    //  console.log(data);
})
}, [ gameValue ])


const handleLoadingForNextRound = () => { 
    SetLoadingInterval(setInterval(() => { SetLoadingCountDown((prev) => prev =   +(prev - 0.1 ).toFixed(1)) } , 100 ));
}

if( loadingCountDown === 0 ){
    clearInterval(loadingInterval);
}


   
    return (
    <>
    <Header/>

    <div className="mt-[7rem] w-3/12  md:w-8/12 mx-auto h-[5rem]">
        {<p className="text-[#38a6da] text-center rounded-[15px] text-[5rem] font-[600] boxshadow3">{`${gameValue} X`}</p>}
        
        { expired && <p className="text-[#498967] text-center rounded-[15px] mt-[5rem] text-[3rem] w-full flex flex-row justify-between px-5 font-[600] boxshadow2">Starting In :<p>{loadingCountDown}</p></p>}


        </div>


    </>
  


 )
}

export default Game;