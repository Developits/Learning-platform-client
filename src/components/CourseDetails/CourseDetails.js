import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Pdf from "react-to-pdf";
import { useNavigate } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import Card from "react-bootstrap/Card";

const ref = React.createRef();

const CourseDetails = () => {
  const details = useLoaderData();
  const { id, name, logo, duration, prize, rating, description } = details[0];
  const navigate = useNavigate();

  return (
    <div>
      <Card ref={ref} className="text-center w-50 mx-auto mt-3">
        <Card.Header as="h5">
          <>{name}</>
          <Pdf targetRef={ref} filename="Course Details.pdf">
            {({ toPdf }) => (
              <FaFilePdf onClick={toPdf} className="ms-5"></FaFilePdf>
            )}
          </Pdf>
        </Card.Header>
        <Card.Body>
          <Card.Img className="h-25 w-25 mb-3" variant="top" src={logo} />
          <Card.Text>{description}</Card.Text>
          <div className="card-details">
            <p>Duration: {duration} hr</p>
            <p>Prize: {prize} Tk</p>
            <p>Ratings: {rating}</p>
          </div>
          <Button
            onClick={() => {
              navigate(`/premium/${id}`);
            }}
            variant="primary"
          >
            Get premium access
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CourseDetails;
