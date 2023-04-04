import { profileImageHandler , nameHandler , emailHandler , mobileHandler} from '../../../Redux/Reducers/Settings/Profile/ProfileSettings';
import { useDispatch, useSelector } from "react-redux";
import userService from "../../../api/services/user.service";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from 'react-router-dom';



const ProfileSettings = () => {

    const [ isLoading , SetIsLoading ] = useState<boolean>(false);


    const selectState :any = useSelector(profileImageHandler);
    const profileImageState = selectState.payload.ProfileSettings.profileImage;
    const SetProfileImage = useDispatch();
    
    const selectNameState :any = useSelector(nameHandler);
    const nameState = selectNameState.payload.ProfileSettings.name;
    const SetName = useDispatch();

    const selectEmailState :any = useSelector(emailHandler);
    const emailState = selectNameState.payload.ProfileSettings.email;
    const SetEmail = useDispatch();

    const selectMobileState :any = useSelector(mobileHandler);
    const mobileState = selectNameState.payload.ProfileSettings.mobile;
    const SetMobile = useDispatch();

console.log(nameState);

    const navigate = useNavigate();

    const getBase64 = ( file : any ) => {
        return new Promise(resolve => {
          let baseURL = "";
          let reader = new FileReader();
          reader.readAsDataURL(file);
    
          reader.onload = () => {
            resolve(baseURL);
            let {result} : any = reader;
            SetProfileImage(profileImageHandler(result));
          };
        });
      };
    
    
      const addProfileImage = async ( ) => {
        SetIsLoading(true);
        let token : any = localStorage.getItem('session');
        let decoded : any = jwt_decode(token);
      
        userService.updateProfileChanges({ userId : decoded.id , image : profileImageState , name  : nameState , email : emailState , mobile : mobileState }).then(( resp : any ) => {
        try{
          console.log(resp);
          SetIsLoading(false);
          navigate('/');
        
        }
        catch(err){
          console.log(err);
          SetIsLoading(false);
        }
      })
    }
    
      useEffect(() => {
      },[ profileImageState ])
    



return (
<>
<div className="w-full flex flex-col text-[#cecece] text-[1.25rem]">

<div className="w-6/12 mx-auto mt-[1rem] flex flex-row justify-between ">
  <label className=" bg-gradient-to-r from-[#30a362] to-[green]  font-[600] px-5 text-[white] h-[3rem] mt-[3rem] border-none rounded-[10px] boxshadow2 hover:scale-105 duration-200 pt-2 transition-all cursor-pointer">
    <input type="file" className="hidden" onChange={(e) => e.target.files && getBase64(e.target.files[0])}/>
     Profile Image +
  </label>

  <div className="bg-transparent border-[2px] border-solid border-[#353535] h-[10rem] w-[10rem] rounded-[50%] boxshadow3">
    <img src={profileImageState} className='rounded-[50%]' />
  </div>

</div>

<div className="w-6/12 mx-auto mt-[2rem] flex flex-row justify-between ">
  <p className='text-[2rem] pl-5'>Name : </p>
   <input className='w-[35%] outline-none bg-[#1f1d20] p-4 rounded-[15px] boxshadow3 ' value={nameState} onChange={(e) => SetName(nameHandler(e.target.value)) }/>
</div>

<div className="w-6/12 mx-auto mt-[1rem] flex flex-row justify-between ">
  <p className='text-[2rem] pl-5'>Email : </p>
   <input className='w-[35%] outline-none bg-[#1f1d20] p-4 rounded-[15px] boxshadow3 ' value={emailState} onChange={(e) => SetEmail(emailHandler(e.target.value))}/>
</div>

<div className="w-6/12 mx-auto mt-[1rem] flex flex-row justify-between ">
  <p className='text-[2rem] pl-5'>Phone : </p>
   <input className='w-[35%] outline-none bg-[#1f1d20] p-4 rounded-[15px] boxshadow3 ' value={mobileState} onChange={(e) => SetMobile(mobileHandler(e.target.value))}/>
</div>


{ isLoading && <ReactLoading type={"spinningBubbles"} width={'50px'} height={'50px'} color="#9a9a9a" className="mx-auto mt-[2rem]" /> }
{ !isLoading && <button onClick={() => addProfileImage()} className="w-2/12 mx-auto mt-[2rem] bg-gradient-to-r from-[#3073a3] to-[#002980]  font-[600] text-[1.5rem] px-3 text-[white]   border-none rounded-[10px] boxshadow2 hover:scale-105 pb-2 duration-200 p-1 transition-all">Save</button>}
     </div> 
</>
)

}


export default ProfileSettings ; 