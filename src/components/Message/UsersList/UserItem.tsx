import { useState } from "react";
import userService from "../../../api/services/user.service";
import jwt_decode from "jwt-decode";
import ReactLoading from "react-loading";
import succeessIcon from '../../../images/icons/success.png';


const UserItem = ( props : any ) => {

    const [ isAdding , SetIsAdding ] = useState<boolean>(false);
    const [ isSucceed , SetIsSucceed ] = useState<boolean>(false);

    const addFriend = ( friendName : any ) => {
       
        console.log(isAdding)
            let token : any = localStorage.getItem('session');
            let decoded : any = jwt_decode(token);
             
            userService.addFriend({ myId : decoded.id , friendName : friendName }).then(( resp : any ) => {
            SetIsAdding(false);
            SetIsSucceed(true);
            setTimeout(() => {
                SetIsSucceed(false)
            }, 2000)
          })
        }


    return ( 
        <div className="w-11/12 cursor-pointer flex flex-row justify-between mx-auto pl-5 py-4 text-[#dadada] border-y-[1px] border-y-solid border-y-[#3f3f3f] boxshadow3">
                <p className="pt-1">{props.name}</p>       
                { isAdding && <ReactLoading type={"spinningBubbles"} width={'30px'} height={'30px'} color="#9a9a9a" className="mr-5 z-30" /> }
                { !isAdding && !isSucceed && <p className=" transition-all duration-200 hover:text-[white] hover:bg-[#82c6649d]  hover:scale-125 border-[0.5px] border-[gray] border-solid px-2 py-1 rounded-[15px]" onClick={() => { addFriend(props.name); SetIsAdding(true); }}> Add + </p> }
                { isSucceed && <img src={succeessIcon} className='transition-all duration-500 w-1/12'/>} 
        </div>
    )
}

export default UserItem;