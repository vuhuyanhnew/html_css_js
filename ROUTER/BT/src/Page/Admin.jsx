import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAdmin) {
            alert("Khong duoc vao");
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } 
    }, [props.isAdmin, navigate]);

    return (
        <div>Admin</div>
    );
}

export default Admin;
