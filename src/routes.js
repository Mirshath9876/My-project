import { Navigate, useLocation, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./Layout/DashboardLayout";
// import SimpleLayout from './Components/simple/SimpleLayout';
//
// import BlogPage from './pages/BlogPage';
// import UserPage from './pages/UserPage';
// import Page404 from './Components/pages/Page404';
// import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from "./pages/DashboardAppPage";
import LoginPage from "./Auth/Login";
import UploadAndEditPdf from "./pages/UploadPDF/UploadAndEditPdf";
import { useEffect } from "react";
// ----------------------------------------------------------------------

export default function Router({ setIsLoggedIn }) {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const routes = useRoutes([
    {
      path: "/dashboard",
      element: isLoggedIn ? (
        <DashboardLayout setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
      ],
    },
    {
      path: "/login",
      element: isLoggedIn ? (
        <Navigate to="/dashboard/app" replace />
      ) : (
        <LoginPage />
      ),
    },
    {
      path: "/updatepdf",
      element: isLoggedIn ? (
        <UploadAndEditPdf />
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    {
      path: "*",
      element: isLoggedIn ? (
        <Navigate to="/dashboard/app" replace />
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    // {
    //   path: 'entity-master',
    //   element: <EntityMaster />
    // },
    // {
    //   path: 'parameter-subfield',
    //   element: <ParameterForm />,
    // },
    // {
    //   path: 'dal',
    //   element: <DALPlugin />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
  ]);

  console.log(location.pathname);
  const matchingRoute = routes.props.match.route.path;
  const isLocationInMatchingRoute = location.pathname.startsWith(matchingRoute);
  setIsLoggedIn(isLocationInMatchingRoute);
  // useEffect(() => {
  //   if (!isLocationInMatchingRoute && isLoggedIn) {
  //     localStorage.setItem("isLoggedIn", "true");
  //   } else {
  //     localStorage.setItem("isLoggedIn", "false");
  //   }
  // });
  localStorage.setItem(
    "isLoggedIn",
    isLocationInMatchingRoute && isLoggedIn ? "true" : "false"
  );
  console.log(matchingRoute, "routes");

  return routes;
}
