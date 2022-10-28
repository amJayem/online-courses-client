import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RightNav from '../components/RightNav';
import Main from '../layout/Main';
import Blog from '../Pages/Blog';
import Cart from '../Pages/Cart';
import CourseDetails from '../Pages/CourseDetails';
import Courses from '../Pages/Courses';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('https://10-learning-platform-server.vercel.app/course-details')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch('https://10-learning-platform-server.vercel.app/course-details')
            },
            {
                path: '/courses',
                element: <RightNav></RightNav>,
                loader: ()=> fetch('https://10-learning-platform-server.vercel.app/course-details')
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
            },
            {
                path: '/course-details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=>fetch(`https://10-learning-platform-server.vercel.app/course-details/${params.id}`)
            },
            {
                path: '/cart/:id',
                element: <PrivateRoute>
                    <Cart></Cart>
                </PrivateRoute>,
                loader: ({params})=>fetch(`https://10-learning-platform-server.vercel.app/course-details/${params.id}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

