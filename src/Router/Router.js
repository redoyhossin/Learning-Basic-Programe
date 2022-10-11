import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from '../component/AllTopic/Topics';
import Blog from '../component/Blog/Blog';
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
                    element:<Home/>
                },
                {
                    path: 'Topics',
                    element:<Topics/>
                },
                {
                    path: 'Statistics',
                    element:<Statistics/>
                },
                {
                    path: 'Blog',
                    element:<Blog/>
                }
            ]
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