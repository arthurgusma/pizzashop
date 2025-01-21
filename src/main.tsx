import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './routes.tsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <Helmet titleTemplate='%s | puzza.shop' />
    <RouterProvider router={router} />
  </HelmetProvider>
)
