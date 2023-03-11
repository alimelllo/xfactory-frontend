import { useState } from "react";
import './CardsGame.css';
import cardBg from '../../../images/cardBg.png';
import cardBgBack from '../../../images/cardBgBack.png';

const Card = () => {

    const [ flip , SetFlip ] = useState<boolean>(false);


    return (
    <div className="scene scene--card">
      <div onClick={() => SetFlip(!flip)} className={`card  ${ flip ? 'is-flipped' : null}`}>
         <div className="card__face card__face--front boxshadow3">
          <img className=" opacity-[0.7]" src={cardBg}></img>
         </div>
         <div className="card__face card__face--back">
         <img className=" opacity-[0.7]" src={cardBgBack}></img>
         </div>
      </div>
    </div>
    )
}

export default Card;