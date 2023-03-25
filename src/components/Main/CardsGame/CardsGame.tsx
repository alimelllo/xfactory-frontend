import { useEffect, useState } from "react";
import Header from "../../GeneralComponents/Header";
import Card from './Card';
import PlayForm from "./PlayForm";
import { useSelector } from 'react-redux';
import { canPlay } from '../../../Redux/Reducers/CardsGame/CardsGame';


const CardsGame = () : any => {
  
const Flip = require('react-reveal/Flip');

const [ cardList , SetCardList ] = useState<any>([]);

const [ checkStatus , SetCheckStatus ] = useState<boolean>(false);


const selectState :any = useSelector(canPlay);

const canPlayState = selectState.payload.CardsGame.canPlayValue;


useEffect(() => {
   
    let animates = [ 'animate1' , 'animate2' , 'animate3' , 'animate4' , 'animate5' ,'animate6' ,'animate7' ,'animate8' ,'animate9' ,'animate10', 'animate1' , 'animate2' , 'animate3' , 'animate4' , 'animate5' ,'animate6' ,'animate7' ,'animate8' ,'animate9' ,'animate10' ];
    let leaveAnimates = ['stay1' ,'leave' ,'leave','leave','leave' ,'leave' ,'stay2' ,'leave' ,'leave' ,'stay3' , 'leave' , 'leave' , 'leave' , 'leave' , 'leave' , 'leave', 'leave' , 'leave' , 'leave' , 'leave'];

    if(!checkStatus){
        const list = animates.map(( item : any) => (
            <Card animate={item}/>
        ))
        SetCardList(list);
    }
    else if(checkStatus){
        const list = leaveAnimates.map(( item : any) => (
            <Card animate={item}/>
    ))
        SetCardList(list);
    }
    
    
} , [ checkStatus ])   


    return (
    <div>
      <Header/>
      <>
      { !canPlayState && <PlayForm/> }
      
       { canPlayState && 
<div className="h-screen flex flex-col justify-start overflow-hidden">
<Flip left cascade>
   <p className="text-center my-4 md:my-2 text-[#4c4c4c] text-[2rem] font-[600]">Pick Your Three Cards !</p>
</Flip>

      <div className="h-[50%] md:h-[60%] flex flex-wrap md:pb-[1.5rem] justify-around boxshadow4 ">
        {cardList}
      </div>

    <div className="text-center mt-[2rem] text-[2rem] font-[600] flex flex-row justify-around w-5/12 md:w-8/12 mx-auto">
      <p onClick={() => SetCheckStatus(true)} className="text-[1.5rem] text-[white] hover:scale-105 duration-200 transition-all bg-[#be4d15] hover:bg-[#892602] h-[2.5rem] cursor-pointer mt-4 px-[2rem] rounded-[20px]">Catch</p>
      <p className="text-[#760e2f] duration-200 transition-all border-[3px] border-solid border-[#af143b] h-[4rem] w-[4rem] pt-1 rounded-[50%]">30</p>
    </div>


</div>}
</>
    
    </div>
    )
}

export default CardsGame;