import {  createBrowserRouter } from 'react-router-dom'
import Todo from './Page/Todo';
import Product from './Page/Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is Home</div>,
  }, {
    path: "/todo",
    element: <Todo />
  }, {
    path: "/product",
    element: <Product />
  }
]);
export { router }