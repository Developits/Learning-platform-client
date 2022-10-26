import React from "react";

const CourseCart = ({ course }) => {
  const { name, duration } = course;
  return (
    <div>
      <p>name : {name}</p>
      <p>Duration: {duration}</p>
    </div>
  );
};

export default CourseCart;
