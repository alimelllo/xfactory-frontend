import { useState } from "react";
import userService from "../../../api/services/user.service";
import jwt_decode from "jwt-decode";
import ReactLoading from "react-loading";
import succeessIcon from '../../../images/icons/success.png';
import removeIcon from '../../../images/icons/delete.png';
import redSuccessIcon from '../../../images/icons/redSuccess.png';


const UserItem = ( props : any ) => {

    const [ isAdding , SetIsAdding ] = useState<boolean>(false);
    const [ isRemoving , SetIsRemoving ] = useState<boolean>(false);
  
    const [ removeSucceed , SetRemoveSucceed ]= useState<boolean>(false);
    const [ isSucceed , SetIsSucceed ] = useState<boolean>(false);
   
    const [ added , SetAdded ] = useState<boolean>(false);
    const [ removed , SetRemoved] = useState<boolean>(false);

    const addFriend = async ( friendName : any ) => {
       
            let token : any = localStorage.getItem('session');
            let decoded : any = jwt_decode(token);
             
            userService.addFriend({ myId : decoded.id , friendName : friendName }).then(( resp : any ) => {
            try{
              SetIsAdding(false);
              SetIsSucceed(true);
              setTimeout(() => {
                 SetIsSucceed(false);
                 SetAdded(true);
              }, 2000);
            }
            catch(err){
                SetIsSucceed(false);
                SetAdded(false);
            }
          })
        }

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
        <div className="w-11/12  flex flex-row justify-between mx-auto pl-5 py-4 text-[#dadada] border-y-[1px] border-y-solid border-y-[#3f3f3f] boxshadow3">
                <p className="pt-1">{props.name}</p>       
                {( isAdding || isRemoving ) && <ReactLoading type={"spinningBubbles"} width={'30px'} height={'30px'} color="#9a9a9a" className="mr-5 z-30" /> }
               
                { !props.isFriend && !isAdding && !isSucceed && !added && <p className=" transition-all duration-200 hover:text-[white] cursor-pointer hover:bg-[#82c6649d]  hover:scale-125 border-[0.5px] border-[gray] border-solid px-2 py-1 rounded-[15px]" onClick={() => { addFriend(props.name); SetIsAdding(true); }}> Add + </p> }
                { isSucceed && <img src={succeessIcon} className='transition-all duration-500 w-1/12 mr-5'/>} 
                
                { props.isFriend && !isRemoving && !removeSucceed && !removed && <div className=" transition-all duration-200  cursor-pointer w-[10%] opacity-[0.7] hover:opacity-[1] mr-3" onClick={() => { removeFriend(props.name); SetIsRemoving(true); }}> <img src={removeIcon} /> </div> }
                { removeSucceed && <img src={redSuccessIcon} className='transition-all duration-500 w-1/12 mr-5'/>} 
        </div>
    )
}

export default UserItem;