import { useState } from "react";
import './CardsGame.css';

const Card = () => {

    const [ flip , SetFlip ] = useState<boolean>(false);


    return (
    <div className="scene scene--card">
      <div onClick={() => SetFlip(!flip)} className={`card  ${ flip ? 'is-flipped' : null}`}>
         <div className="card__face card__face--front boxshadow3">Front</div>
         <div className="card__face card__face--back">Back</div>
      </div>
    </div>
    )
}

export default Card;