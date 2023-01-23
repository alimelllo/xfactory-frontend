import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserDataService from "../../api/services/user.service";
import { useUserContext } from "../../Context/UserContextProvider";

const Login = (): any => {

  const { isLoggedInHandler } : any = useUserContext();
  
  let navigate = useNavigate();

  const initialUserState = {
    email: "",
    password: "",
  };
  
  const [ user, setUser ] = useState(initialUserState)
  
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser(( state ) => state = { ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const data = user ;
  
      UserDataService.login(data)
      .then((response: any) => {
        console.log(response.data)
        if(response.data.success){
          localStorage.setItem('session' , response.data.token );
          localStorage.setItem('userName' , response.data.user.name );
          navigate("/")
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <div className="flex flex-col text-[#757575] text-center  text-[2rem] font-[monospace]">
     <div className="flex flex-row justify-between boxshadow2"><Link to='/'><p className="py-5 pl-5 hover:text-white transition-all duration-200">{"<< back"}</p></Link> <p className="text-[2rem] py-5 pr-5 text-[#a1a1a1] ">
        Login
      </p></div>
     
      <form onSubmit={handleSubmit}>
      <div className="FORM_CONTAINER mt-[5rem] w-5/12 md:w-11/12  md:text-[1rem] mx-auto">
        <div className="flex flex-row my-5">
          <p className="w-5/12  textshadow2 pt-2 md:pt-4 md:w-3/12">Email : </p>
          <input
            name="email"
            placeholder="Email"
            className="ml-5 md:w-8/12 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="flex flex-row my-5">
          <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-3/12">Password : </p>
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="ml-5 md:w-8/12 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required>
          </input>
        </div>
        <button
          className="mx-auto md:w-8/12 bg-gradient-to-r from-[#2c82b8] to-[#0d5f8b] px-10 text-[white] border-none rounded-[15px] p-2 md:p-4 boxshadow2 mt-[5rem] hover:scale-110 duration-200 transition-all"
          onClick={handleSubmit}>
          Login
        </button>
      </div>
      </form>
    </div>
  );
};
export default Login;
