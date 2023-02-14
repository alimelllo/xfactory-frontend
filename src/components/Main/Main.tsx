import mainIntro from '../../images/mainIntro.png';
import { Link } from "react-router-dom";
import Header from '../GeneralComponents/Header';
import Stars from '../GeneralComponents/StarsBackground/Stars';



const Main = () : any => {

return (
 <div className="w-full h-screen flex" style={{ backgroundImage : `url(${mainIntro})` , backgroundSize :'cover'  , backgroundPosition : 'center'}}>
  <div className="w-full">
   <Stars />
    <Header/>

      <div className="flex flex-col h-[75%] justify-end">
        <div className="w-full py-3 text-[2.5rem] font-[600] text-[#a4a4a4] md:text-[#3d3d3d] rounded-[5px] md:text-center"><p className="float-right md:float-none mr-[6rem] md:mr-0 md:text-center">Play To Earn...</p></div>
        <div className="flex justify-end md:justify-center"><Link className='pb-3 text-[1.5rem] text-center z-50 text-white rounded-[5px] mr-[6rem] md:mr-0  boxshadow2 w-[15rem] bg-gradient-to-r from-[#2a6744] to-[green] cursor-pointer transition-all duration-200 hover:scale-110 tracking-[1px] hover:bg-[#0c9f0c] pt-2 mt-[2rem] ' to="/Game"><p> Start Playing </p></Link></div>
      </div>
    
    </div> 
  </div> 
 )
}

export default Main; 