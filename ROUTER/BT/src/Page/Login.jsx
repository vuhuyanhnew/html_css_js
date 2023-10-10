import { useNavigate, Navigate } from "react-router-dom";

const Login = () =>{
    
    
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("isLogin") == "true"
    if(isLogin){
        return <Navigate to="/"></Navigate>
    }
    const handleClick = () =>{
        localStorage.setItem("isLogin", true)
        navigate("/")
    }
    
return(
    <>
    <div>Username</div>
    <input></input>
    <br/>
    <div>Password</div>
    <input></input>
    <br/>
    <button onClick={handleClick}>Login</button>
    <br/>
    </>
)
}
export default Login