import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useLoaderData } from "react-router-dom";

const Premium = () => {
  const details = useLoaderData();
  const { name, logo, prize, description } = details[0];

  const navigate = useNavigate();

  const handleCourse = () => {
    navigate(`/courses`);
  };
  return (
    <div className="card mt-5 w-50 mx-auto mb-3">
      <div className="row p-2 g-0">
        <div className="col-md-4">
          <img className="img-fluid rounded-start" src={logo} alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">Prize: {prize} Taka</small>
            </p>
            <Button onClick={handleCourse} className="me-3">
              Purchase
            </Button>
            <Button onClick={handleCourse}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
