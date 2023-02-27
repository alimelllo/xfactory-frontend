import { useEffect, useState } from "react";
import UserServices from '../../../api/services/user.service'
import jwt_decode from "jwt-decode";
import ReactLoading from "react-loading";

const FriendsList = () : any => {

    const [ friendsList , SetFriendsList ] = useState<any>([]);
    const [ isLoading , SetIsLoading ] = useState<boolean>(false)

    useEffect(() => {
        SetIsLoading(true);
        let token : any = localStorage.getItem('session');
        let decoded : any = jwt_decode(token);
       
        UserServices.currentUserInfo({ id : decoded.id }).then(( resp ) => {
         try{
            console.log(resp);
          
            const { friends } = resp.data;
            const list = friends.map(( item : any ) => (
              <p className="w-11/12 cursor-pointer transition-all duration-200 hover:text-[white] hover:bg-[#171717] hover:scale-110 mx-auto pl-5 py-4 text-[#dadada] border-y-[1px] border-y-solid border-y-[#3f3f3f] boxshadow3">{item.name}</p>
            ));
          
          SetFriendsList(list);
          SetIsLoading(false);
         }
         catch( err ){
          console.log(err)
         }
            
        })
      } , [])


 return (
 
 <div className="mt-5 z-30">
     { !isLoading && friendsList}
     {  isLoading && <ReactLoading type={"spinningBubbles"} color="#9a9a9a" className="mx-auto mt-[5rem] w-6/12" />}
 </div>
    
    )
}

export default FriendsList;