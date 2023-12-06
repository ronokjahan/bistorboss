
import { createContext } from "react";
import app from "./fairbse";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

 const auth = getAuth(app);
export const Authcontex=createContext()


const Authprovider = ({children}) => {
    const[user,setuser]=useState(null)
    const[loading,setloading]=useState(true)

    const singups=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const singouts=()=>{
        setloading(true)
        return signOut(auth)
    }
    useEffect(()=>{
    const unsbscribe=onAuthStateChanged(auth,currenruser=>{
            setuser(currenruser)
            setloading(false)

        })
        return()=>{
            return unsbscribe()
        }
    },[])
 const authinfo={
    singups,
    singin,
    user,
    loading,
    singouts
 }
    return (
        <Authcontex.Provider value={authinfo} >
            {children}
        </Authcontex.Provider>
    );
};

export default Authprovider;