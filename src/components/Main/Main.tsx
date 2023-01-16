import mainIntro from '../../images/mainIntro.png';
import { Link } from "react-router-dom";
import BurgerMenu from '../GeneralComponents/BurgerMenu';



const Main = () : any => {


   

return (
 <div className="w-full h-screen flex" style={{ backgroundImage : `url(${mainIntro})` , backgroundSize :'cover'  , backgroundPosition : 'center'}}>
  <div className="w-full">
   
    <BurgerMenu />
    
    <div className="w-full boxshadow2 sticky top-0 shadow-2xl flex z-30 bg-[#252525f4] flex-row justify-end text-center text-[#888888] text-[1.5rem] font-[monospace] pb-7 pt-6 ">
        <p className="mr-10">{localStorage.getItem("userName")}</p> 
    </div>

      <div className="flex flex-col h-[75%] justify-end">
        <div className="w-full py-3 text-[2.5rem] font-[600] text-[#a4a4a4] md:text-[#3d3d3d] rounded-[5px] md:text-center"><p className="float-right md:float-none mr-[6rem] md:mr-0 md:text-center">Play To Earn...</p></div>
        <div className="flex justify-end md:justify-center"><Link to="/Game"><p className="pb-3 text-[1.5rem] text-center text-white rounded-[5px] mr-[6rem] md:mr-0  boxshadow2 w-[15rem] bg-gradient-to-r from-[#2a6744] to-[green] cursor-pointer transition-all duration-200 hover:scale-110 tracking-[1px] hover:bg-[#0c9f0c] pt-2 mt-[2rem] ">Start Playing</p></Link></div>
      </div>
    
    </div> 
  </div> 
 )
}

export default Main; 