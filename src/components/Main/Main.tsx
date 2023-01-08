import { useUserContext } from "../../Context/UserContextProvider";
import mainIntro from '../../images/mainIntro.png';

const Main = () : any => {

    const { isLoggedInHandler ,  isLoggedIn } : any = useUserContext()

return (
 <div className="relative ">
    
    <img className="object-fill z-10" src={mainIntro} />
    <div className="w-full absolute shadow-2xl top-0 flex z-30 bg-[#252525f4] flex-row justify-between text-center text-[#888888] text-[1.5rem] font-[monospace] pb-7 pt-6 ">
        <p className="ml-10 cursor-pointer hover:text-white hover:scale-110 transition-all duration-200 text-[1.5rem]" onClick={() => { localStorage.removeItem('session'); isLoggedInHandler(!isLoggedIn)}}> Log out</p> 
        <p className="mr-10"> User Name </p> 
    </div>
    <div className="absolute top-[60%] py-3 text-[2.5rem] text-center text-[#a4a4a4] rounded-[5px] boxshadow3 z-30 w-[15rem] right-[10%]">Play To Earn...</div>
    <div className="absolute top-[75%] py-2 pb-3 text-[1.5rem] text-center text-white rounded-[5px] boxshadow3 z-30 w-[15rem] right-[10%] bg-gradient-to-r from-[#2a6744] to-[green] cursor-pointer transition-all duration-200 hover:scale-110 tracking-[1px] hover:bg-[#0c9f0c]">Start Playing</div>
  </div> 
 )
}

export default Main; 