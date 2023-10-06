import { createBrowserRouter } from 'react-router-dom'
import Home from './Page/Home';
import Product from './Page/Product';
import Login from './Page/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }, 
    {
        path: "/product/:productId",
        element: <Product />
    },
    {
        path: "/login",
        element: <Login />
    }

]);
export { router }