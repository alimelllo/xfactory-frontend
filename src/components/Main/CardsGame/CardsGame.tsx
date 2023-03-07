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
      { !canPlay && <PlayForm/> }
      
       { canPlay && <div className="h-screen flex flex-col justify-start">
         
    <div className="h-[25rem] mt-[2rem] flex flex-wrap justify-around">
       {cardList}
    </div>

       </div>}
    </div>
       
    )
}

export default CardsGame;