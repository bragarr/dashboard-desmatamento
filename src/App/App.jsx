import { BrowserRouter, Outlet } from 'react-router-dom';
import { MainRoutes } from '../Routes';

import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <main>
        <MainRoutes />
        <Outlet />
      </main>
    </BrowserRouter>
  )
};
