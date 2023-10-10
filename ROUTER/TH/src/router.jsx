import { createBrowserRouter } from 'react-router-dom'
import HomePage from './Component/HomePage.jsx'
import PrivateGroup from './Component/PrivateGroup.jsx';
import { Outlet } from 'react-router-dom';


    
const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello</div>
    },
    {
        path: "/homepage",
        element: <HomePage />
    }, 
    {
        path: "/about",
        element: <div>
            <div>About</div>
            <Outlet />
        </div>
        ,
        children: [
            {
                path: "/about/me",
                element: <div>me</div>
            },
            {
                path: "/about/us",
                element: <span>us</span>
            }
        ]
    },
    {
        path: '/private-group',
        element: <PrivateGroup />
      }
    
  ]);
  export {router}