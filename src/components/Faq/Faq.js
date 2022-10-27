import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className="w-75 mx-auto mt-5">
      <h1 className="m-4 text-center">Learning With Code Force : FAQ</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item className="bg-secondary" eventKey="0">
          <Accordion.Header>Where can I go for help?</Accordion.Header>
          <Accordion.Body>
            If you find you have a question about a paid course while you're
            taking it, you can search for answers to your question in the Q&A or
            ask the instructor. Our Help Center has extensive information
            regarding our various features, and articles with troubleshooting
            steps to help you quickly resolve any issues you encounter. Our
            support team is also happy to help.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="bg-secondary" eventKey="1">
          <Accordion.Header>
            What if I don't like a course I purchased?
          </Accordion.Header>
          <Accordion.Body>
            We want you to be satisfied, so all eligible courses purchased on We
            can be refunded within 30 days. If you are unhappy with a course,
            you can request a refund, provided the request meets the guidelines
            in our refund policy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="bg-secondary" eventKey="2">
          <Accordion.Header>How can I pay for a course?</Accordion.Header>
          <Accordion.Body>
            We supports several different payment methods, depending on your
            account country and location.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="bg-secondary" eventKey="3">
          <Accordion.Header>
            Do I have to start my course at a certain time? And how long do I
            have to complete it?
          </Accordion.Header>
          <Accordion.Body>
            There are no deadlines to begin or complete a course. Learn more
            about our Lifetime Access policy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="bg-secondary" eventKey="4">
          <Accordion.Header>
            Do I receive anything after I complete a course?
          </Accordion.Header>
          <Accordion.Body>
            While WE are not an accredited institution, we offer skills-based
            courses taught by real-world experts in their field. Every approved,
            paid course features a certificate of completion to document your
            accomplishment.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
