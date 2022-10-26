import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../Pages/Blog';
import Cart from '../Pages/Cart';
import Courses from '../Pages/Courses';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }
        ]
    }
])

