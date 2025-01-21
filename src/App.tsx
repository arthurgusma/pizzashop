import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from 'sonner';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | puzza.shop' />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
