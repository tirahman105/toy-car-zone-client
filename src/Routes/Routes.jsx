import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            loader: () => fetch('https://toy-car-zone-server.vercel.app/toys')
        },
        {
            path:'/addtoy',
            element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
            path:'/mytoys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            
        },
        {
            path:'/toys/:id',
            element: <PrivateRoute><ToyDetails></ToyDetails>,</PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-car-zone-server.vercel.app/toys/details/${params.id}`)
        }
      ]

    },
    
  ]);


export default router;
