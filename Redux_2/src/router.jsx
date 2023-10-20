import { createBrowserRouter } from 'react-router-dom'
import Todo from './Page/Todo';
import Product from './Page/Product';
import Student from './Page/Student';
import PhoneBook from './Page/Phonebook';
import Post from './Page/Post';
import User from './Page/User';
import Book from './Page/Book';



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
  },
  {
    path: "/student",
    element: <Student />
  },
  {
    path: "/phonebook",
    element: <PhoneBook />
  },
  {
    path: "/post",
    element: <Post />
  }
  ,
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/book",
    element: <Book />
  }
]);
export { router }