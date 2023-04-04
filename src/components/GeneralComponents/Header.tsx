import BurgerMenu from '../GeneralComponents/BurgerMenu';
import { nameHandler, profileImageHandler } from '../../Redux/Reducers/Settings/Profile/ProfileSettings';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {


    const selectState :any = useSelector(profileImageHandler);
    const profileImageState = selectState.payload.ProfileSettings.profileImage;

    const selectNameState :any = useSelector(nameHandler);
    const nameState = selectState.payload.ProfileSettings.name;


    return (
    <>
    
    <BurgerMenu />
    
    <div className="w-full boxshadow4 sticky top-0 shadow-2xl flex z-30 bg-[#161616e7] flex-row justify-end text-center text-[#888888] text-[1.5rem] font-[monospace] py-4 ">
        <div className='flex flex-row w-2/12 justify-around'>
               <p className='pt-3'>{nameState}</p> 
               <div className='w-[4rem] h-[4rem] boxshadow4 rounded-[50%] '><img className='rounded-[50%] boxshadow4' src={profileImageState}/></div>
        </div>
    </div> 
   
   </> 
   )
}

export default Header;