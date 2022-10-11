import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from '../component/AllTopic/Topics';
import Blog from '../component/Blog/Blog';
import SingleCart from '../component/Home/Cart/SingleCart/SingleCart';
import Home from '../component/Home/Home';
import Statistics from '../component/Statistics/Statistics';
import Errorhandler from '../Errorhandler';
import Main from '../Layout/Main';
const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                },
                {
                    path: 'Topics',
                    element: <Topics />,

                },
                {
                    path: 'Statistics',
                    element: <Statistics />
                },
                {
                    path: 'Blog',
                    element: <Blog />
                }
            ]
        },


        {
            path: '/Cart/:CartId',
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.CartId}`),
            element:<SingleCart/>
        },


        {
            path: '*',
            element: <Errorhandler />
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;