import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateEvent from "../pages/CreateEvent";
import ManageEvent from "../pages/ManageEvent";
import JoinEvent from "../pages/JoinEvent";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import UpcomingEvents from "../pages/UpcomingEvents";
import EventDetails from "../pages/EventDetails";
import UpdateEvent from "../pages/UpdateEvent";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/upcoming-events",
        loader: () => fetch("https://a11-server-gamma.vercel.app/events"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <UpcomingEvents></UpcomingEvents>,
      },
      {
        path: "/event-details/:id",
        loader: ({ params }) =>
          fetch(`https://a11-server-gamma.vercel.app/events/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events",
        loader: () => fetch("https://a11-server-gamma.vercel.app/events"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <ManageEvent></ManageEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-event/:id",
        loader: () => fetch("https://a11-server-gamma.vercel.app/events"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <UpdateEvent></UpdateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/joined-events",
        element: (
          <PrivateRoute>
            <JoinEvent></JoinEvent>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
