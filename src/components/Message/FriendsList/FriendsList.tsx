import { useEffect, useState } from "react";
import UserServices from '../../../api/services/user.service'
import jwt_decode from "jwt-decode";
import ReactLoading from "react-loading";
import FriendItem from "./FriendItem";

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
              <FriendItem name={item.name}/>
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
     {  isLoading && <ReactLoading type={"bars"} color="#9a9a9a" className="mx-auto mt-[5rem] w-6/12" />}
 </div>
    
    )
}

export default FriendsList;