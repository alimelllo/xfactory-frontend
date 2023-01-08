import { createContext , useContext , useState } from "react";

const UserContext = createContext({});

export const useUserContext = ()  => {
    return useContext(UserContext)
}

const UserContextProvider = ({children} : any) => {


const [ isLoggedIn , SetIsLoggedIn ] = useState(false);

const isLoggedInHandler = ( state : any ) => {
    SetIsLoggedIn(state);
}

return (
    <UserContext.Provider value={{ isLoggedIn , isLoggedInHandler }}>
        {children}
    </UserContext.Provider>
)


}

export default UserContextProvider;