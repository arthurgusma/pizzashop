import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/signin";


export const router = createBrowserRouter([
    { path: '/', element: <Dashboard /> },
    { path: '/sign-in', element: <SignIn /> }
])