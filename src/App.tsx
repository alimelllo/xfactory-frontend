import { useEffect } from "react";
import LoginOrSignUp from "./components/LoginOrSignUp/LoginOrSignUp";


function App() {

  useEffect(() => {
    fetch("http://localhost:8081/users" , { method: 'get', 
    headers: new Headers({
     "Access-Control-Allow-Origin": "*"
    })})
      .then(res => res.json())
      .then(
        (result) => {
         console.log(result)
        },
        
        (error) => {
        console.log(error)
        }
      )
  }, [])

  return (
   <>
   <LoginOrSignUp/>
   </>
  );

}

export default App;
