import { socket } from "../../Socket/socket";
import { useEffect, useState } from "react";
import Header from "../GeneralComponents/Header";
import StarsAnimate from "./GameLayout/GameLayout";
import mainGameBg from '../../images/mainGameBg2.jpg';
import explosion from '../../images/explosion.gif';
import rocketGoing from '../../images/stop.gif';
import Stars from "../GeneralComponents/StarsBackground/Stars";


const Game = () : any => {
  
     const [ gameValue , SetGameValue ] = useState<any>(0);
     const [ expired , SetExpired] = useState<boolean>(false);
     const [ loadingCountDown , SetLoadingCountDown ] = useState<any>();

useEffect(() => {
     socket.off('gameValue').on('gameValue', async ( data : any ) => {
        if(data !== 'Expired'){
          SetGameValue(data);  
          SetExpired(false); 
          SetLoadingCountDown(false)
        }
        if(data === 'Expired'){
          SetGameValue('Expired');
          SetExpired(true)
          setTimeout(() =>{
           SetExpired(false);
          } , 3000 )
        }
    //  console.log(data);
})

socket.off('loadingToStart').on('loadingToStart', async ( data : any ) => {
    SetLoadingCountDown(data)
})

}, [ gameValue ])

   
    return (
    <>
<div className={`w-full z-20 h-screen  flex flex-col `} style={{ backgroundImage : `url(${mainGameBg})`, backgroundSize :'cover'  , backgroundPosition : 'bottom'}}>

    <div className="w-full">
       <Header/> 
    </div>
   
    <StarsAnimate/> 


<div className="GAME_WRAPPER_CONTAINER w-full flex flex-row md:flex-col justify-between">
 
  <div className="GAME_VALUE_CONTAINER w-[70%] md:w-full flex flex-row mt-[5rem] justify-end md:justify-center md:mt-[1rem]">
   <Stars />
   <div className=" flex flex-row md:flex-col w-7/12 z-20 h-[23rem] md:h-[15rem] md:w-11/12 bg-[#030303dc] justify-center md:p-5 boxshadow3 rounded-[10px]">
    { !expired && !loadingCountDown && <>
       <div className={`w-[35%] md:w-[30%] md:mx-auto flex flex-col justify-center`}>
        <img className="opacity-[0.8]" src={ rocketGoing } />
       </div>
    <div className="text-[#e9e9e9] md:mx-auto md:w-full flex flex-col justify-center text-center rounded-[15px] text-[3.5rem] w-4/12 font-[600] ">{`${ gameValue !== 'Expired' ? gameValue + ' ' + 'X' : 'Ready'}`}</div></>}
    { expired &&
       <div className="flex flex-col justify-center">
        <img src={ explosion } />
       </div> }
    { loadingCountDown && <div className="text-[#659567] flex flex-col justify-center text-center rounded-[15px] text-[3rem] font-[600]">{`Start in : ${loadingCountDown}`}</div>}
   </div>
  </div>

  <div className="JOIN_PANEL z-20 bg-[#101010e7] h-screen w-[25%] md:w-full flex flex-col md:mt-2">
    
    <p className="text-center pt-3 text-[#bababa] text-[1.5rem] md:text-[1rem]">X Factory</p>
     <p className="mx-auto mt-[2rem] md:mt-[1rem] w-10/12 text-[1.5rem] text-[gray] md:text-[1.25rem]">Balance : 3 $</p>
     <input placeholder="Amount" className="bg-[#1d1d1f] text-[1.5rem] w-10/12 mt-[1.5rem] md:mt-[1rem] pl-3 outline-none text-[#dedede] mx-auto rounded-[15px] boxshadow3 h-[4rem] md:h-[3rem]" />
     <input placeholder="Close at" className="bg-[#1d1d1f] text-[1.5rem] w-10/12 mt-[2rem] md:mt-[1rem] pl-3 outline-none text-[#dedede] mx-auto rounded-[15px] boxshadow3 h-[4rem] md:h-[3rem]" />
     {/* <button className="w-8/12 text-[1.75rem] font-[600] mx-auto bg-gradient-to-r from-[#407055] to-[#316731] px-5 text-[white] border-none rounded-[15px] p-2 boxshadow3 mt-[5rem] md:mt-[1rem] hover:scale-110 duration-200 transition-all">Bet</button> */}
     <button className="w-8/12 text-[1.75rem] font-[600] mx-auto bg-gradient-to-r from-[#3060a3] to-[#003e80] px-5 text-[white] border-none rounded-[15px] p-2 boxshadow3 mt-[5rem] md:mt-[1rem] hover:scale-110 duration-200 transition-all">Bet Next Round</button>
     {/* <button className="w-8/12 text-[1.75rem] font-[600] mx-auto bg-gradient-to-r from-[#bf4808] to-[#ac1842] px-5 text-[white] border-none rounded-[15px] p-2 boxshadow3 mt-[5rem] hover:scale-110 duration-200 transition-all">Cash Out $</button> */}
  </div>


</div>





</div>
</>
  


 )
}

export default Game;