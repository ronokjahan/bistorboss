import { useContext } from "react";
import { Authcontex } from "../Componante/Fairbase/Authprovider";
import { Navigate } from "react-router-dom";


const PrivetRouts = ({children}) => {
    const{user}=useContext(Authcontex)
    if(user){
        return children
    }
    return <Navigate to='login'></Navigate>
    
};

export default PrivetRouts;