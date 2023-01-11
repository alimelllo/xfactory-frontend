import { useEffect, useState } from "react";
import LoginOrSignUp from "./components/LoginOrSignUp/LoginOrSignUp";
import Main from "./components/Main/Main";
import { useUserContext } from "./Context/UserContextProvider";


function App() {

  const { isLoggedIn } : any = useUserContext();

  useEffect(() => {
  
  }, [ isLoggedIn ])
  
  return (
   <>
   { localStorage.getItem('session') ? <Main/>  : <LoginOrSignUp/> }
   </>
  );

}

export default App;
