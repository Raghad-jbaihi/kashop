import { createContext } from "react";

 export const UserContext =createContext();

 const UserContextProvider=({children})=>{
    console.log("Hello , i am user context!!!")
    
    const userName="Raghad";
    return <UserContext.Provider value={userName}>
        {children}
    </UserContext.Provider>
 }

 export default UserContextProvider;