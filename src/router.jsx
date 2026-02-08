import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/auth/register/Register";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/auth/logIn/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/Cart',
                element:<Cart/>
            },
            
            {
                path:'/Login',
                element:<Login/>
            },
            
            {
                path:'/Register',
                element:<Register/>
            }
        ]
    }
]);

export default router;