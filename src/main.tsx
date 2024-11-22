import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import LoginPage from "@/pages/LoginPage.tsx";
import MainPanel from "@/pages/MainPanel.tsx";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/panel',
        element:<MainPanel/>
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
