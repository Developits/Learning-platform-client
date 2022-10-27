import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const courseData = useLoaderData();

  const navigate = useNavigate();

  return (
    <div className="d-lg-flex">
      <div class="row">
        <div class="col-3">
          <div className="">
            {courseData.map((course) => (
              <div
                onClick={() => {
                  navigate(`/courses/${course.id}`);
                }}
                className="bg-secondary rounded fs-3 text-bold text-center m-2 p-3"
              >
                {course.name}
              </div>
            ))}
          </div>
        </div>
        <div class="col-9">
          <div className="card-container">
            {courseData.map((course) => (
              <CourseCard key={course.id} course={course}></CourseCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
