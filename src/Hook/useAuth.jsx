import { useContext } from "react";
import { AuthContext } from './../authProvider/AuthProvider';



const useAuth =()=>{
    const data = useContext(AuthContext);
    return data
}
export default useAuth