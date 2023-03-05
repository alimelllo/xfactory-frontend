import { useState } from "react";
import ReactLoading from "react-loading";
import userService from "../../../api/services/user.service";
import removeIcon from '../../../images/icons/delete.png';
import greenMessage from '../../../images/icons/greenMessage.png';
import redSuccessIcon from '../../../images/icons/redSuccess.png';
import jwt_decode from "jwt-decode";

const FriendItem = ( props : any) => {
   
    const [ removeSucceed , SetRemoveSucceed ]= useState<boolean>(false);
    const [ isRemoving , SetIsRemoving ] = useState<boolean>(false);
    const [ removed , SetRemoved] = useState<boolean>(false);

    const removeFriend = async ( friendName : any ) => {
    
        let token : any = localStorage.getItem('session');
        let decoded : any = jwt_decode(token);
         console.log({ myId : decoded.id , friendName : friendName });
         
        userService.removeFriend({ myId : decoded.id , friendName : friendName }).then(( resp : any ) => {
        try{
          SetIsRemoving(false);
          SetRemoveSucceed(true);
          setTimeout(() => {
             SetRemoveSucceed(false);
             SetRemoved(true);
          }, 2000);
        }
        catch(err){
            SetRemoveSucceed(false);
            SetRemoved(false);
        }
      })
    }

return (
<div className="w-11/12 transition-all duration-200 flex flex-row justify-between border-y-[1px] border-y-solid py-4 border-y-[#3f3f3f] mx-auto">
    <p className=" cursor-pointer  hover:text-[white] hover:bg-[#171717] hover:scale-110 pt-1 pl-5  text-[#dadada]  boxshadow3">{props.name}</p>

<div className="w-3/12 flex flex-row">
    { !isRemoving && !removeSucceed && !removed && <div className=" transition-all duration-200  cursor-pointer w-[80%] opacity-[0.3] hover:opacity-[0.6] mr-3" onClick={() => { removeFriend(props.name); SetIsRemoving(true); }}> <img src={removeIcon} /> </div> }
    { !isRemoving && !removeSucceed && !removed && <div className=" transition-all duration-200  cursor-pointer w-[80%] opacity-[0.5] hover:opacity-[0.9] mr-3" > <img src={greenMessage} /> </div> }
    { removeSucceed && <img src={redSuccessIcon} className='transition-all duration-500 w-3/12 ml-3'/>} 
    { isRemoving && <ReactLoading type={"spinningBubbles"} width={'30px'} height={'30px'} color="#9a9a9a" className="mr-5 z-30" /> }
</div>

</div>

)
}

export default FriendItem;