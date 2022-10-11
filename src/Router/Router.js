import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorhandler from '../Errorhandler';
import Main from '../Layout/Main';
const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    
                }
            ]
        },
        {
            path: '*',
            element:<Errorhandler/>
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;