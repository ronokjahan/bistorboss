import { useEffect } from "react";
import { useState } from "react";


const ManuHook = () => {
    const [menus,setmanus]=useState([])
    const[loading,setloading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:3000/menu')
        .then(res=>res.json())
        .then(data=>{
            setmanus(data)
            setloading(false)
        
        })
    },[])
    return[menus,loading]
};

export default ManuHook;