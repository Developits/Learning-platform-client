import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/Courses/Courses";
import Blogs from "../../components/Blogs/Blog";
import Faq from "../../components/Faq/Faq";
import Main from "../../layouts/Main";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Premium from "../../components/Premium/Premium";
import Error from "../../components/Error/Error";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
      },
      {
        path: "/courses",
        loader: () => fetch("https://code-force-server.vercel.app/coursesInfo"),
        element: <Courses></Courses>,
        errorElement: <Error></Error>,
      },
      {
        path: "/courses/:courseId",
        loader: ({ params }) => {
          return fetch(
            `https://code-force-server.vercel.app/coursesInfo/${params.courseId}`
          );
        },
        element: <CourseDetails></CourseDetails>,
        errorElement: <Error></Error>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/premium/:id",
        loader: ({ params }) => {
          return fetch(
            `https://code-force-server.vercel.app/coursesInfo/${params.id}`
          );
        },

        element: (
          <PrivateRoute>
            <Premium></Premium>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
