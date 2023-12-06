import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Lyout/Main';
import Home from './Pages/Home/Home/Home';
import Menu from './Pages/Menu/Menu/Menu';
import {HelmetProvider } from 'react-helmet-async'
import Order from './Componante/Order/Order/Order';
import Login from './Pages/Home/Home/TesteMonial/Login';
import Authprovider from './Componante/Fairbase/Authprovider';
import Regstion from './Pages/Home/Home/TesteMonial/Regstion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'menu',
      element:<Menu></Menu>
    },
    {
      path:'order/:category',
      element:<Order></Order>
    },{
      path:'login',
      element:<Login></Login>
    },{
      path:'regstion',
      element:<Regstion></Regstion>
    }
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='max-w-screen-xl	mx-auto'>
   <Authprovider>
   <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
   </Authprovider>
    </div>
  
  </React.StrictMode>,
)
