import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const { id, name, logo, description, duration, prize, rating } = course;
  const navigate = useNavigate();

  const handleCourse = () => {
    navigate(`/courses/${id}`);
  };
  return (
    <div>
      <Card>
        <img className="img-size p-2" src={logo} alt="" />
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
            <p>Duration:{duration}hr</p>
            <p>Prize:{prize}Tk</p>
            <p>Ratings:{rating}</p>
          </div>
          <Button onClick={handleCourse}>Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
