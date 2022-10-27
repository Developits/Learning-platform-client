import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLoaderData } from "react-router-dom";

const Premium = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div className="w-50 mx-auto mt-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Course Name</Form.Label>
          <Form.Control name="courseName" type="text" readOnly="sfx" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Course prize</Form.Label>
          <Form.Control name="CoursePrize" type="text" readOnly="sdf" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Premium;
