import { socket } from "../../Socket/socket";
import { useEffect, useState } from "react";
import Header from "../GeneralComponents/Header";
import GameLayout from "./GameLayout/GameLayout";
import mainGameBg from '../../images/mainGameBg2.jpg';
import rocket from '../../images/rocket2.png';
import rocketGoing from '../../images/rocketGoing.png';
import './gameAnimations.css';


const Game = () : any => {
  
     const [ gameValue , SetGameValue ] = useState<any>(0);
     const [ expired , SetExpired] = useState<boolean>(false);
     const [ loadingCountDown , SetLoadingCountDown ] = useState<number>(8);
     const [ loadingInterval , SetLoadingInterval] = useState<any>(null);

useEffect(() => {
     socket.off('gameValue').on('gameValue', async ( data : any ) => {
        if(data !== 'Expired'){
          SetGameValue(data);  
          SetExpired(false); 
          SetLoadingCountDown(( prev ) => prev = 8);
         
        }
        if(data === 'Expired'){
          SetGameValue('Expired');
          SetExpired(true)
          SetLoadingInterval(( prev : any ) => prev = setInterval(() => { SetLoadingCountDown((prev) => prev = +(prev - 0.1 ).toFixed(1)) } , 90 ));
        }
    //  console.log(data);
})
}, [ gameValue ])


// const handleLoadingForNextRound = () => { 
//     SetLoadingInterval(( prev : any ) => setInterval(() => { SetLoadingCountDown((prev) => prev = +(prev - 0.1 ).toFixed(1)) } , 100 ));
// }

if( loadingCountDown === 0 ){
    console.log('stop...')
    clearInterval(loadingInterval);
    // SetLoadingCountDown((prev) => prev = 0)
    // SetLoadingInterval(null);
}


   
    return (
    <>
<div className={`w-full z-20 h-screen  flex flex-col justify-between`} style={{ backgroundImage : `url(${mainGameBg})`, backgroundSize :'cover'  , backgroundPosition : 'bottom'}}>
   
   
    <div className="w-full">
       <Header/> 
    </div>
<GameLayout/> 
<div className="CONTAINER w-full flex flex-row">
    
    <div className=" flex flex-col w-full h-[95%] justify-end ">
       <div style={{  perspective: '100px', perspectiveOrigin: 'right'}} className={`w-[30%] ${expired ? '' : 'apearanimation'} h-[20rem] mx-auto`}><img src={ gameValue > 1.5 ? rocketGoing :  rocket } /></div>
    </div>
   
    <div className="w-4/12 md:w-8/12">
        {<div className="text-[#38a6da] text-center rounded-[15px] text-[4rem] font-[600] boxshadow3">{`${gameValue} X`}</div>}
        
        { expired && <div className="text-[#498967] text-center rounded-[15px] mt-[5rem] text-[2rem] w-full flex flex-row justify-around px-5 font-[600] boxshadow2">Starting In : <p>{loadingCountDown < 0 ? 0 : loadingCountDown }</p></div>}
    </div>

</div>

    
     
    


    </div>
    


    

    

    </>
  


 )
}

export default Game;