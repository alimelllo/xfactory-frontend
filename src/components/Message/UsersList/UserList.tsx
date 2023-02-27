import { useEffect, useState } from "react";
import UserServices from '../../../api/services/user.service'
import ReactLoading from "react-loading";
import userService from "../../../api/services/user.service";
import jwt_decode from "jwt-decode";

const UsersList = () : any => {

    const [ UsersList , SetUsersList ] = useState<any>([]);
    const [ isLoading , SetIsLoading ] = useState<boolean>(false)
    const [ isAdding , SetIsAdding ] = useState<boolean>(false)




    const addFriend = async ( friendName : any ) => {
        SetIsAdding(true);

        let token : any = localStorage.getItem('session');
        let decoded : any = jwt_decode(token);

        userService.addFriend({ myId : decoded.id , friendName : friendName }).then(( resp : any ) => {
        try{
             console.log(resp)
             SetIsAdding(false);
        }
        catch( err ){
            console.log(err);
            SetIsAdding(false);
        }
           
      })
    }




    useEffect(() => {
        SetIsLoading(true);
        
       
        UserServices.getAllUsers().then(( resp ) => {
         try{
            console.log(resp);
          
            const users = resp.data;
            const list = users.map(( item : any ) => (
              <div className="w-11/12 cursor-pointer flex flex-row justify-between mx-auto pl-5 py-4 text-[#dadada] border-y-[1px] border-y-solid border-y-[#3f3f3f] boxshadow3"><p className="pt-1">{item.name}</p>{ isAdding ? <ReactLoading type={"spinningBubbles"} color="#9a9a9a" className="mx-auto" /> : <p className=" transition-all duration-200 hover:text-[white] hover:bg-[#82c6649d]  hover:scale-125 border-[0.5px] border-[gray] border-solid px-2 py-1 rounded-[15px]" onClick={() => { addFriend(item.name) }}>Add +</p>}</div>
            ));
          
          SetUsersList(list);
          SetIsLoading(false);
         }
         catch( err ){
          console.log(err)
         }
            
        })
      } , [])


 return (
 
 <div className="mt-5 z-30">
     { !isLoading && UsersList}
     {  isLoading && <ReactLoading type={"spinningBubbles"} color="#9a9a9a" className="mx-auto mt-[5rem] w-6/12" />}
 </div>
    
    )
}

export default UsersList;