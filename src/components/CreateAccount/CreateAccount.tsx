import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserDataService from "../../api/services/user.service";

const CreateAccount = (): any => {
  let navigate = useNavigate();

  const initialUserState = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState)

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser(( state ) => state = { ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const data = user ;
    console.log(user)
   
      UserDataService.create(data)
      .then((response: any) => {
        setUser({
          name: response.data.name,
          email: response.data.email,
          mobile: response.data.mobile,
          password: response.data.password,
        })
        navigate("/Login")
        console.log(response.data)
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <div className="flex flex-col text-[#8e8e8e] text-center  text-[2rem] font-[monospace]">
      <div className="flex flex-row justify-between boxshadow2"><Link to='/'><p className="py-5 pl-5 md:text-[1.5rem] hover:text-white transition-all duration-200">{"<< back"}</p></Link> <p className="text-[2rem] md:text-[1.5rem] py-5 pr-5 text-[#dfdfdf] ">
        Create Account
      </p></div>
      <form onSubmit={handleSubmit}>
      <div className="FORM_CONTAINER mt-[3rem] md:text-[1rem] w-6/12 md:w-11/12 mx-auto">
        <div className="flex flex-row my-5">
          <p className="w-5/12  textshadow2 pt-2 md:pt-4 md:w-4/12">UserName : </p>
          <input
            name="name"
            placeholder="Name"
            className="ml-5 md:w-8/12  text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
         ></input>
        </div>
        <div className="flex flex-row my-5">
          <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-4/12">Email : </p>
          <input
            name="email"
            placeholder="Email"
            className="ml-5 md:w-8/12 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="flex flex-row my-5">
          <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-4/12">Mobile : </p>
          <input
            name="mobile"
            placeholder="Phone Number"
            className="ml-5 md:w-8/12 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="flex flex-row my-5">
          <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-4/12">Password : </p>
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="ml-5 md:w-8/12 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
         ></input>
        </div>
        <button
          className="mx-auto md:w-8/12 md:p-4 bg-gradient-to-r from-[#30a362] to-[green] px-5 text-[white] border-none rounded-[15px] p-2 boxshadow2 mt-[2rem] hover:scale-110 duration-200 transition-all"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
      </form>
    </div>
  );
};
export default CreateAccount;
