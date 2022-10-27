import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const { id, name, logo, description, duration, prize, rating } = course;
  const navigate = useNavigate();

  const handleCourse = () => {
    navigate(`/courses/${id}`);
  };
  return (
    <div>
      <div className="course-container">
        <div>
          <Button onClick={handleCourse}>{name}</Button>
        </div>
        <div className="card-container">
          <Card onClick={handleCourse} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description.length > 100 ? (
                  <>{description.slice(0, 100) + "... Read more"}</>
                ) : (
                  description
                )}
              </Card.Text>
              <div className="card-details">
                <p>Duration: {duration}</p>
                <p>Prize: {prize}</p>
                <p>Ratings: {rating}</p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
