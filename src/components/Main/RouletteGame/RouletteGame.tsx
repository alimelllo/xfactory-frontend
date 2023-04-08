import Header from "../../GeneralComponents/Header";
import { Wheel } from 'react-custom-roulette'
import { useState } from "react";


const RouletteGame = () => {

const [ roll , SetRoll ] = useState<boolean>(false);
const [ gameResult , SetGameResult ] = useState<any>('');

    const data = [
        { option: 'Thrios 1.3x', style: { backgroundColor: '#16372d' ,textColor: 'gray' }},
        { option: 'Duos 1.2x', style: { backgroundColor: '#391f19', textColor: 'gray' } },
        { option: 'oops! 0', style: { backgroundColor: '#16372d', textColor: 'gray' } },
        { option: 'Quads 1.4x', style: { backgroundColor: '#391f19', textColor: 'gray' } },
        { option: 'Silver 2x', style: { backgroundColor: '#16372d', textColor: 'gray' } },
        { option: 'oops! 0', style: { backgroundColor: '#391f19', textColor: 'gray' } },
        { option: 'Gold 3x', style: { backgroundColor: '#16372d', textColor: 'gray' } },
        { option: 'Next Round', style: { backgroundColor: '#391f19', textColor: 'gray' } , describtion : 'you got a ticket for the next round !' },
        { option: 'Royal 3x', style: { backgroundColor: '#16372d', textColor: 'gray' } },
        { option: 'oops! 0', style: { backgroundColor: '#391f19', textColor: 'gray' } },
      ]

      const Flip = require('react-reveal/Flip');


    return (
    <>
    <Header/>

    <div className="w-full flex justify-between">


<div className="w-3/12 p-1 h-screen boxshadow4 text-[1.5rem]">



</div>




      <div className="w-[28.5rem] h-[28.5rem] rounded-[50%] boxshadow4 mt-[3rem]  flex justify-center border-[8px] border-[solid] border-[#16372d] bg-[#391f19]">
      <Wheel
          mustStartSpinning={roll}
          spinDuration={0.8}
          prizeNumber={7}
          data={data}
          outerBorderColor={"#331710"}
          outerBorderWidth={15}
          innerBorderColor={"white"}
          radiusLineColor={"#4f4f4f"}
          radiusLineWidth={5}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={20}
          onStopSpinning={() => { SetRoll(false); SetGameResult('Next Round'); }}
        />
      </div>

      <div className="w-3/12 boxshadow4reversed p-1 h-screen text-[1.5rem] flex flex-col">
         <p className="py-5 text-center text-[gray] brder-b-solid border-b-[2px] border-b-[#212121] boxshadow3">Roulette</p> 
         <Flip cascade>
         <p className="py-5 pl-5 text-[gray]  boxshadow3">Balance : 3<span className="text-[green]">$</span></p> 
         </Flip>
     
        
          <Flip left cascade>
            <div className="text-[#205c4a] font-600 tracking-[2px] text-[2rem] text-center mt-[3rem]">
              {gameResult ? gameResult : 'Rolling...'}
            </div>
          </Flip>
          <Flip left cascade>
          <p className="text-center text-[1rem] text-[gray] mt-5">
            {gameResult && data[7].describtion }
          </p>
          </Flip>
          
         


         <input className="w-8/12 mx-auto pl-5 p-2 pb-3 mt-[8rem] bg-[#272727] text-[#c9c9c9] outline-none rounded-[10px] boxshadow3" placeholder="amount"/>
         <button onClick={() => {SetRoll(true); SetGameResult('');} } className="w-8/12 mx-auto p-2 pb-3 mt-[2rem] bg-[#16372d] hover:bg-[#122b23] hover:text-white hover:scale-105 font-[600] transition-all duration-200 text-[#c9c9c9] outline-none rounded-[10px] boxshadow3"> Roll</button>

      </div>

    </div>
    </>
    )
}

export default RouletteGame;