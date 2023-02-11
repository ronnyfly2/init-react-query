import { FC } from 'react';
import { Outlet } from 'react-router';

export const App: FC = () => {
  
  return (
    <div className="container mt-3">
    <h1>Users <small>List</small> </h1>
      <Outlet />
    </div>
  )
}