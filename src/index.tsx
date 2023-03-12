import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from './components/CreateAccount/CreateAccount'
import Login from './components/Login/Login';
import UserContextProvider from './Context/UserContextProvider';
import Game from './components/Main/Game';
import Message from './components/Message/Message';
import GlobalMessage from './components/Message/GlobalMessages/GlobalMessage';
import ChatRoom from './components/Message/ChatRoom/ChatRoom';
import CardsGame from './components/Main/CardsGame/CardsGame';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserContextProvider>
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<App />}/>
     <Route path="/CreateAccount" element={<CreateAccount/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/RocketGame" element={<Game/>}/>
     <Route path="/CardsGame" element={<CardsGame/>}/>

     <Route path="/Messages" element={<Message/>}>
       <Route path="/Messages/Global" element={<GlobalMessage/>}/>
       <Route path="/Messages/Chat" element={<ChatRoom/>}/>
    </Route>

   </Routes>
  </BrowserRouter>
  </UserContextProvider>
);

reportWebVitals();
