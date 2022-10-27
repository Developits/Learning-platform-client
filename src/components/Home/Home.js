import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="d-lg-flex lg:flex-row-reverse align-items-center justify-content-around">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="p-5 w-50">
          <p className="fs-1 fw-bolder">Hello There</p>
          <p className="fs-4 fw-bolder">Welcome to CODE FORCE</p>
          <p className="py-6">
            A broad selection of courses Choose from 204,000 online video
            courses with new additions published every month. Code Force.Inc. is
            a global destination for teaching and learning online. It was
            founded in May 2010 by Eren Bali, Gagan Biyani, and Oktay Caglar. As
            of July 2022, the platform has more than 54 million students,
            204,000 courses, and 71,000 instructors teaching courses in over 75
            languages.
          </p>
          <Link to="/courses">
            <button className="btn mt-5 btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
