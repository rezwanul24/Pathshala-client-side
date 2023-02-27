import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllCourse from '../component/AllCourse/AllCourse';
import Blog from '../component/blog/Blog';
import CheckOut from '../component/checkOut/CheckOut';
import Course from '../component/course/Course';

import FAQ from '../component/FAQ/FAQ';
import Home from '../component/home/Home';
import Login from '../component/Login/Login';
import NotFound from '../component/notFoundPage/NotFound';
import PrivateRoute from '../component/Register.js/PrivateRoute';
import Register from '../component/Register.js/Register';
import SingleCourse from '../component/SingleCourse/SingleCourse';
import Main from '../layout/Main'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '*',
            element: <NotFound></NotFound>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/course',
            element: <Course></Course>,
            children:[
                {
                    index:true,
                    element:<AllCourse></AllCourse>
                },
                {
                    path:':id',
                    element:<SingleCourse></SingleCourse>
                    
                },
                {path:'*',element:<NotFound></NotFound>} 
            ]
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/faq',
            element: <FAQ></FAQ>
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
            path:'/checkout/:id',
            element:<PrivateRoute>
                <CheckOut></CheckOut>
            </PrivateRoute>
        },
      ]
    },
    
  ]);