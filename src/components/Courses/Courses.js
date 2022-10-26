import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const courseData = useLoaderData();
  return (
    <div>
      {courseData.map((course) => (
        <CourseCard key={course.id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Courses;
