import main from '../../images/main.jpg';
import { Link } from 'react-router-dom';
import  { useUserContext } from '../../Context/UserContextProvider';

const LoginOrSignUp = () : any => {


return (
<div className='flex flex-col justify-center'>
    <div className='font-[cursive] boxshadow2 pb-3 text-[#d3d3d3] pl-5 text-[2rem] mt-3 h-[4rem]'>X Factrory</div>

    <div style={{ backgroundImage : `url(${main})`, backgroundSize :'cover' , backgroundPosition : 'center' }} className='h-[25rem] md:h-[20rem] rounded-[10px] flex mx-auto w-6/12 md:w-11/12 mt-[3rem] boxshadow2 opacity-[0.8] '>
        <p className='bg-[#5b5b5bbf] m-auto py-4 px-[3rem] text-center w-6/12 text-white rounded-[15px] text-[1.5rem]'>Coming Soon</p>
    </div> 

    <div className="w-4/12 md:w-10/12 mx-auto flex flex-row md:flex-col justify-around mt-[3rem]">
    <Link to='/Login'> <button className="md:w-full bg-gradient-to-r from-[#2c82b8] to-[#0d5f8b]  boxshadow2 hover:bg-[#5186da] text-white text-[2rem] px-10 pb-1 rounded-[10px] hover:scale-110 duration-200 transition-all">Log in</button></Link>
    <Link to='/CreateAccount'> <button className="md:w-full md:mt-5 bg-[#e07d27] boxshadow2 hover:bg-[#ef7a4f] text-white text-[2rem] px-5 pb-1 rounded-[10px] hover:scale-110 duration-200 transition-all">Create Account</button></Link>
    </div>
</div>
)

}

export default LoginOrSignUp;