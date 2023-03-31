import mainIntro from '../../images/mainIntro.png';
import { Link } from "react-router-dom";
import Header from '../GeneralComponents/Header';
import Stars from '../GeneralComponents/StarsBackground/Stars';
import rocketGame from '../../images/rocketGame.png';
import cardsGame from '../../images/cardsGame.png';
import luckGame from '../../images/luckGame.png';
import userService from '../../api/services/user.service';
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { profileImageHandler } from '../../Redux/Reducers/Settings/Profile/ProfileSettings';
import { useDispatch, useSelector } from "react-redux";

const Main = () : any => {


  const selectState :any = useSelector(profileImageHandler);  
  const SetProfileImage = useDispatch();



  useEffect(() => {
   
    let token : any = localStorage.getItem('session');
    let decoded : any = jwt_decode(token);
   
    userService.currentUserInfo({ id : decoded.id }).then(( resp ) => {
     try{ 
        SetProfileImage(profileImageHandler(resp.data.profileImage));
     }
     catch( err ){
      console.log(err)
     }
        
    })
  } , [])


return (
 <div className="w-full h-screen flex" style={{ backgroundImage : `url(${mainIntro})` , backgroundSize :'cover'  , backgroundPosition : 'center'}}>
  <div className="w-full">
   <Stars />
    <Header/>

      <div className="flex flex-col h-[80%] justify-center">
       
        <div className="w-[80%] md:w-full mx-auto flex flex-row justify-around text-[#afafaf]">
        {/* <div className='bg-[#1c1c1ce5] rounded-[15px] w-[30%] boxshadow3 z-50'>
             <p className='text-center py-4 font-[600] text-[1.5rem] bg-[#191919] rounded-t-[15px] boxshadow3'>Lucky Roll Game</p>
             <div className='w-7/12 my-[1rem] mx-auto'><img className='opacity-[0.6]' src={luckGame}/></div>
             <Link to="/Game"><p className='text-white pb-3 text-[1.5rem] text-center z-50 rounded-[5px] mx-auto boxshadow2 w-7/12 bg-gradient-to-r from-[#2b4c7d] to-[#6e2d3c] cursor-pointer transition-all duration-200 hover:scale-105 tracking-[1px] pt-2 my-[3rem]'> Start Playing </p></Link>
          </div> */}
          <div className='bg-[#1c1c1ce5] rounded-[15px] w-[30%] md:w-[45%] boxshadow3 z-50'>
             <p className='text-center py-4 font-[600] text-[1.5rem] bg-[#191919] rounded-t-[15px] boxshadow3'>Cards Game</p>
             <div className='w-10/12 mx-auto md:pt-5'><img src={cardsGame}/></div>
             <Link to="/CardsGame"><p className='text-white pb-3 text-[1.5rem] text-center z-50 rounded-[5px] mx-auto boxshadow2 w-7/12  md:w-11/12  bg-gradient-to-r from-[#9a4a2b] to-[#6e2d3c] cursor-pointer transition-all duration-200 hover:scale-105 tracking-[1px] pt-2 my-[3rem]'> Start Playing </p></Link>
          </div>
          <div className='bg-[#1c1c1ce5] rounded-[15px] w-[30%] md:w-[45%] boxshadow3 z-50'>
             <p className='text-center py-4 font-[600] text-[1.5rem] bg-[#191919] rounded-t-[15px] boxshadow3'>Rocket Game</p>
             <div className='w-6/12 mx-auto my-[2.5rem] '><img src={rocketGame}/></div>
             <Link to="/RocketGame"><p className='text-white pb-3 text-[1.5rem] text-center z-50 rounded-[5px] mx-auto boxshadow2 w-7/12  md:w-11/12  bg-gradient-to-r from-[#244055] to-[#1e2838] cursor-pointer transition-all duration-200 hover:scale-105 tracking-[1px] hover:bg-[#0c9f0c] pt-2 my-[3rem]'> Start Playing </p></Link>
          </div>
        </div>
        
   
      </div>
    
    </div> 
  </div> 
 )
}

export default Main; 