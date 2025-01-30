import {  useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () =>{
    return useContext(AuthContext);
}

export const AuthProvider =({children}) =>{
    const[currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loding, setLodding] = useState(true);
    
    useEffect(()=>{
          const unsubscrib = onAuthChanged(auth, initializeUser);
    },[])
  
    async function initializeUser(user) {
        if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null)
            setUserLoggedIn(false);
        }
        setLodding(false);
    }
    const value = {
        currentUser,
        userLoggedIn,
        loding
    }
 
    return (
        <AuthContext.Provider value = {value}>
            {!loding && children}
        </AuthContext.Provider>
    )

}
