import { useEffect, useState } from "react";
import Header from "../../GeneralComponents/Header";
import Card from './Card';
import PlayForm from "./PlayForm";

const CardsGame = () => {

const [ cardList , SetCardList ] = useState<any>([]);
const [ canPlay , SetCanPlay ] = useState<boolean>(false);

useEffect(() => {
    let arr = [ 'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ,'Card' ];

    const list = arr.map(( item : any ) => (
      <Card/>
    ))
      SetCardList(list)
} , [])   


    return (
    <div>
      <Header/>

      { canPlay && <PlayForm/> }
      
       { !canPlay && 
<div className="h-screen flex flex-col justify-start ">
         <p className="text-center my-5 text-[#4c4c4c] text-[2rem] font-[600]">Pick Your Three Shots !</p>
    <div className="h-[30rem]  flex flex-wrap justify-around boxshadow4 py-[2rem]">
       {cardList}
    </div>
    <div className="text-center mt-[2rem] text-[2rem] font-[600] flex flex-row justify-around w-5/12 mx-auto">
      <p className="text-[1.5rem] text-[white] hover:scale-105 duration-200 transition-all bg-[#a23c09] hover:bg-[#892602] h-[3rem] cursor-pointer pt-1 mt-3 px-[3rem] rounded-[20px]">Catch</p>
      <p className="text-[#760e2f] duration-200 transition-all border-[3px] border-solid border-[#af143b] h-[4.5rem] w-[4.5rem] pt-2 rounded-[50%]">30</p>
    </div>
</div>}
    
    
    </div>
    )
}

export default CardsGame;