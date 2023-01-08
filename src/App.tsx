import { useEffect, useState } from "react";
import LoginOrSignUp from "./components/LoginOrSignUp/LoginOrSignUp";
import Main from "./components/Main/Main";
import { useUserContext } from "./Context/UserContextProvider";
import io from 'socket.io-client';

const socket = io('localhost:8081');

function App() {

  const { isLoggedIn } : any = useUserContext();

  useEffect(() => {
  
  }, [ isLoggedIn ])
  const emitInSocket = () => {
  
    //Client sends a message at the moment it got connected with the server
      socket.emit('clientToServer', "Hello, server!");
      socket.emit('realTime' , 'some number')
    }

  useEffect(() => {
    emitInSocket();
    socket.on('serverToClient', (data) => {
    console.log(data)
   })
  } , [])






  return (
   <>
   { localStorage.getItem('session') ? <Main/>  : <LoginOrSignUp/> }
   </>
  );

}

export default App;
