import { useEffect, useState } from "react";
import UserServices from '../../../api/services/user.service'
import ReactLoading from "react-loading";
import UserItem from "./UserItem";
import jwt_decode from "jwt-decode";

const UsersList = () : any => {

    const [ UsersList , SetUsersList ] = useState<any>([]);
    const [ isLoading , SetIsLoading ] = useState<boolean>(false);
  

    useEffect(() => {
        SetIsLoading(true);
       
        UserServices.getAllUsers().then(( allUsers ) => {
         try{
          let token : any = localStorage.getItem('session');
          let decoded : any = jwt_decode(token);
        UserServices.currentUserInfo({ id : decoded.id }).then(( resp ) => {
        
        
            const users = allUsers.data;
            const list = users.map(( item : any , i : any ) => (
            resp.data.friends[i] === item.name ? null : <UserItem name={item.name}/>
            ));
          
          SetUsersList(list);
          SetIsLoading(false);
       
        })
          
            
         }
         catch( err ){
          console.log(err)
         }
            
        })
      } , [ ]);

     


 return (
 
 <div className="mt-5 z-30">
     { !isLoading && UsersList }
     { isLoading && <ReactLoading type={"spinningBubbles"} color="#9a9a9a" className="mx-auto mt-[5rem] w-6/12" />}
 </div>
    
    )
}

export default UsersList;