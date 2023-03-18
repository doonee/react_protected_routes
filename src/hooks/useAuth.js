import { useContext } from "react";
// import { useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    // const { auth } = useContext(AuthContext);
    // useDebugValue(auth, auth => auth?.user ? "로그온" : "로그아웃")
    return useContext(AuthContext);
}

export default useAuth;