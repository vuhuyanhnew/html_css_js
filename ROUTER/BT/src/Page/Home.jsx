import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const isAdmin = true
    const handleClick = (productId) => {
        if (isAdmin) {
            navigate(`/product/${productId}`);
        }
        else {
                navigate('/');
        }
    };

    return (
        <>
            <div onClick={() => handleClick(1)}>Sản phẩm 1</div>
            <br />
            <div onClick={() => handleClick(2)}>Sản phẩm 2</div>
            <br />
            <div onClick={() => handleClick(3)}>Sản phẩm 3</div>
            <br />
            <div onClick={() => handleClick(4)}>Sản phẩm 4</div>
            <br />
        </>
    );
};

export default Home;
