import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../App';

import { HomeView, CreateUserView, EditUserView } from '../users/views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        { path: '/', element: <HomeView />,  },
        { path: 'create-user', element: <CreateUserView /> },
        { path: 'user/:id', element: <EditUserView /> },
        { path: '*', element: <Navigate to="/" /> },
    ]
  },
  {
    path: '/',
    element: <Navigate to="/" />
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);