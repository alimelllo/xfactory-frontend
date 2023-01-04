import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    const data = {
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
    };
   
      UserDataService.create(data)
      .then((response: any) => {
        setUser({
          name: response.data.name,
          email: response.data.email,
          mobile: response.data.mobile,
          password: response.data.password,
        })
        navigate("/")
        console.log(response.data)
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <div className="flex flex-col text-[#8e8e8e] text-center  text-[2rem] font-[monospace]">
      <p className="text-[2.5rem] py-5 text-[#dfdfdf] boxshadow2">
        Create Account
      </p>
      <form onSubmit={handleSubmit}>
      <div className="FORM_CONTAINER mt-[5rem] mx-auto">
        <div className="flex flex-row my-5">
          <p className="w-5/12  textshadow2 pt-2">Name : </p>
          <input
            placeholder="Name"
            className="ml-5 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
         ></input>
        </div>
        <div className="flex flex-row my-5">
          <p className="w-5/12 textshadow2 pt-2">Email : </p>
          <input
            name="email"
            placeholder="Email"
            className="ml-5 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="flex flex-row my-5">
          <p className="w-5/12 textshadow2 pt-2">Email : </p>
          <input
            name="phoneNumber"
            placeholder="phone number"
            className="ml-5 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="flex flex-row my-5">
          <p className="w-5/12 textshadow2 pt-2">Password : </p>
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="ml-5 text-white rounded-[5px] boxshadow2 h-[4rem]  outline-none pl-5  bg-[#3c3940]"
            onChange={handleInputChange}
            required
         ></input>
        </div>
        <button
          className="mx-auto bg-gradient-to-r from-[#30a362] to-[green] px-5 text-[white] border-none rounded-[15px] p-2 boxshadow2 mt-[5rem] hover:scale-110 duration-200 transition-all"
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
