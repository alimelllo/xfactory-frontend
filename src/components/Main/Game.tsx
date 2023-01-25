import { socket } from "../../Socket/socket";
import { useEffect, useState } from "react";
import Header from "../GeneralComponents/Header";
import StarsAnimate from "./GameLayout/GameLayout";
import mainGameBg from '../../images/mainGameBg2.jpg';
import explosion from '../../images/explosion.gif';
import rocketGoing from '../../images/giphy.gif';
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


<div className="GAME_WRAPPER_CONTAINER w-full flex flex-row md:flex-col justify-around">
 
<div className="z-20 w-[30%] md:hidden h-screen flex flex-col justify-start bg-[#101010e7]">
  <div className="bg-gradient-to-r from-[#1b1b1b] to-[#151515] w-10/12 mt-[2rem] mx-auto rounded-[10px]"> 
      <p className="bg-black text-center font-[600] text-[#d6d6d6] py-4 border-[3px] z-30 border-solid border-[#515151] boxshadow3 rounded-t-[10px]">Live Board</p>
      <div className="flex flex-row justify-around border-[1px] border-solid border-[#3b3b3b] py-3 text-[#ababab] text-[1.25rem]"><p className="w-6/12">Sarah Karry</p><div className="flex flex-row justify-between w-[40%]"><p>3.5 $</p><p className="text-[#548354] font-[600]">15 $</p></div></div> 
      <div className="flex flex-row justify-around border-[1px] border-solid border-[#3b3b3b] py-3 text-[#ababab] text-[1.25rem]"><p className="w-6/12">Alex song</p><div className="flex flex-row justify-between w-[40%]"><p>110 $</p><p className="text-[#548354] font-[600]">415 $</p></div></div> 
      <div className="flex flex-row justify-around border-[1px] border-solid border-[#499c72] py-3 text-[#ababab] text-[1.25rem]"><p className="w-6/12">Math Miller</p><div className="flex flex-row justify-between w-[40%]"><p>45 $</p><p className="text-[#548354] font-[600]">152 $</p></div></div> 
      <div className="flex flex-row justify-around border-[1px] border-solid border-[#3b3b3b] py-3 text-[#ababab] text-[1.25rem]"><p className="w-6/12">Nyjah Huston</p><div className="flex flex-row justify-between w-[40%]"><p>0.5 $</p><p className="text-[#548354] font-[600]">4 $</p></div></div> 
      <div className="flex flex-row justify-around border-[1px] border-solid border-[#499c72] py-3 text-[#ababab] text-[1.25rem]"><p className="w-6/12">Carval Karry</p><div className="flex flex-row justify-between w-[40%]"><p>63.5 $</p><p className="text-[#548354] font-[600]">280 $</p></div></div> 
      <div className="flex flex-row justify-around border-[1px] border-solid border-[#3b3b3b] py-3 text-[#ababab] text-[1.25rem]"><p className="w-6/12">Mela Jane</p><div className="flex flex-row justify-between w-[40%]"><p>23 $</p><p className="text-[#548354] font-[600]">120 $</p></div></div> 
      <div className="flex flex-row justify-around border-[1px] border-solid border-[#499c72] py-3 text-[#ababab] text-[1.25rem]"><p className="w-6/12">Antoni jason</p><div className="flex flex-row justify-between w-[40%]"><p>34.5 $</p><p className="text-[#548354] font-[600]">220 $</p></div></div> 
      <div className="flex flex-row justify-around border-[1px] border-solid border-[#499c72] py-3 text-[#ababab] text-[1.25rem]"><p className="w-6/12">Angela Karry</p><div className="flex flex-row justify-between w-[40%]"><p>254 $</p><p className="text-[#548354] font-[600]">1120 $</p></div></div> 
  </div>
</div>


  <div className="GAME_VALUE_CONTAINER w-[50%] md:w-full flex flex-row mt-[5rem] justify-center md:justify-center md:mt-[1rem]">
   <Stars />
   <div className=" flex flex-row md:flex-col w-10/12 z-20 h-[23rem] md:h-[15rem] md:w-11/12 bg-[#030303dc] justify-center md:p-5 boxshadow3 rounded-[10px]">
    { !expired && !loadingCountDown && <>
       <div className={`w-[60%] md:w-[50%] md:mx-auto flex flex-col justify-center`}>
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

  <div className="JOIN_PANEL z-20 bg-[#101010e7] h-screen w-[30%] md:w-full flex flex-col md:mt-2">
    
    <p className="text-center pt-3 text-[#bababa] text-[1.5rem] md:text-[1rem]">X Factory</p>
     <p className="mx-auto mt-[2rem] md:mt-[1rem] w-10/12 text-[1.5rem] text-[gray] md:text-[1.25rem]">Balance : 3 $</p>
     <input placeholder="Amount" className="bg-[#1d1d1f] text-[1.25rem] w-10/12 mt-[1.5rem] md:mt-[1rem] pl-3 outline-none text-[#dedede] mx-auto rounded-[15px] boxshadow3 h-[4rem] md:h-[3rem]" />
     <input placeholder="Close at" className="bg-[#1d1d1f] text-[1.25rem] w-10/12 mt-[2rem] md:mt-[1rem] pl-3 outline-none text-[#dedede] mx-auto rounded-[15px] boxshadow3 h-[4rem] md:h-[3rem]" />
     <button className="w-8/12 text-[1.5rem] pb-3 font-[600] mx-auto bg-gradient-to-r from-[#407055] to-[#316731] px-5 text-[white] border-none rounded-[15px] p-2 boxshadow3 mt-[5rem] md:mt-[1rem] hover:scale-110 duration-200 transition-all">Join</button>
     {/* <button className="w-8/12 text-[1.25rem] pb-3 font-[600] mx-auto bg-gradient-to-r from-[#3060a3] to-[#003e80] px-5 text-[white] border-none rounded-[15px] p-2 boxshadow3 mt-[5rem] md:mt-[1rem] hover:scale-110 duration-200 transition-all">Bet Next Round</button> */}
     {/* <button className="w-8/12 text-[1.5rem] pb-3 font-[600] mx-auto bg-gradient-to-r from-[#bf4808] to-[#ac1842] px-5 text-[white] border-none rounded-[15px] p-2 boxshadow3 mt-[5rem] hover:scale-110 duration-200 transition-all">Cash Out $</button> */}
  </div>


</div>





</div>
</>
  


 )
}

export default Game;