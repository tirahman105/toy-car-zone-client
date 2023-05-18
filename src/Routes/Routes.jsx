import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        },
        {
            path:'/alltoys',
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/toys')
        },
        {
            path:'/addtoy',
            element: <AddAToy></AddAToy>
        },
        {
            path:'/mytoys',
            element: <MyToys></MyToys>
        }
      ]

    },
    
  ]);


export default router;
