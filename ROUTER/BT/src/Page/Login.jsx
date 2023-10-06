import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/")
    }
return(
    <>
    <div>Username</div>
    <input></input>
    <br/>
    <div>Password</div>
    <input></input>

    <button onClick={handleClick}></button>
    <br/>
    </>
)
}
export default Login