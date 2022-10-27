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

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/coursesInfo"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:courseId",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/coursesInfo/${params.courseId}`);
        },
        element: <CourseDetails></CourseDetails>,
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
        path: "/courses/:courseId/premium",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/coursesInfo/${params.courseId}`);
        },
        element: (
          <PrivateRoute>
            <Premium></Premium>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
