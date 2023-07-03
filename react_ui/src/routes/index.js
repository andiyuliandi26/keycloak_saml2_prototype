import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/auth-Provider";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminPage } from "../pages/admin-page";
import { HomePage } from "../pages/home-page";
import { NotFoundPage } from "../pages/not-found-page";
import { ProfilePage } from "../pages/profile-page";
import { ProtectedPage } from "../pages/protected-page";
import { PublicPage } from "../pages/public-page";
import { CallbackPage } from "../pages/callback-page";
import { AuthProcess } from "../pages/auth-process";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/auth-process",
      element: <AuthProcess />,
    }
    // {
    //   path: "/protected",
    //   element: <ProtectedPage />,
    // },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
            path: "/protected",
            element: <ProtectedPage />,
        },
       
        // {
        //   path: "/logout",
        //   element: <Logout/>,
        // },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    // {
    //   path: "/",
    //   element: <HomePage />
    // }
    // {
    //   path: "/login",
    //   element: <Login/>,
    // },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;