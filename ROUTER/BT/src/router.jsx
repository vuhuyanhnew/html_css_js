import { createBrowserRouter } from 'react-router-dom'
import Home from './Page/Home';
import Product from './Page/Product';
import Login from './Page/Login';
import Admin from './Page/Admin';

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
        path: "/admin",
        element: <Admin  isAdmin/>
    },
    {
        path: "/login",
        element: <Login />
    }

]);
export { router }