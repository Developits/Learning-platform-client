import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/Courses/Courses";
import Blogs from "../../components/Blogs/Blogs";
import Faq from "../../components/Faq/Faq";
import Main from "../../layouts/Main";
import Home from "../../components/Home/Home";

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
        element: <Courses></Courses>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
