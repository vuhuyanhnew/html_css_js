import { createBrowserRouter } from 'react-router-dom'
import TH1 from './TH/TH1.jsx';
import TH2 from './TH/TH2.jsx';
import BT1 from './BT/BT1.jsx';
import BT2 from './BT/BT2.jsx';

const router = createBrowserRouter([
    {
        path: "/register",
        element: <TH1 />
    },
    {
        path: "/login",
        element: <TH2 />
    },
    {
        path: "/bt1",
        element: <BT1 />
    },
    {
        path: "/bt2",
        element: <BT2 />
    },

    

]);
export { router }