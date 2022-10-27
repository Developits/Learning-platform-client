import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="m-4 text-center">Some important question about React.</h1>
      <div>
        <div className="bg-secondary text-white p-4 m-4 rounded">
          <h3>Question 01: what is cors?</h3>
          <p>
            <strong>Ans</strong>: Cross-Origin Resource Sharing (CORS) is an
            HTTP-header based mechanism that allows a server to indicate any
            origins (domain, scheme, or port) other than its own from which a
            browser should permit loading resources. CORS also relies on a
            mechanism by which browsers make a "preflight" request to the server
            hosting the cross-origin resource, in order to check that the server
            will permit the actual request. In that preflight, the browser sends
            headers that indicate the HTTP method and headers that will be used
            in the actual request.
          </p>
        </div>
        <div className="bg-secondary text-white p-4 m-4 rounded">
          <h3>
            Question 02 : Why are you using firebase? What other options do you
            have to implement authentication?
          </h3>
          <p>
            <strong>Ans</strong>: I use firebase because it create a great
            onboarding flow.Give users a quick, intuitive sign-in process with
            Firebase Authentication.Track each step of your onboarding flow to
            improve the experience. There so many alternate such as Auth0,
            MongoDB, Passport, Okta, and Firebase are the most popular
            alternatives and competitors to Firebase Authentication.
          </p>
        </div>
        <div className="bg-secondary text-white p-4 m-4 rounded">
          <h3>Question 03 : How does the private route work?</h3>
          <p>
            <strong>Ans</strong>: Private Routes in React Router (also called
            Protected Routes) require a user being authorized to visit a
            route.We will start off with a minimal React project that uses React
            Router to navigate a user from one page to another page. In the
            following function component, we have matching Link and Route
            components from React Router for various routes. Furthermore, we
            have a so-called Index Route loaded with the Landing component and a
            so-called No Match Route loaded with inline JSX.
          </p>
        </div>
        <div className="bg-secondary text-white p-4 m-4 rounded">
          <h3>Question 04 : What is Node? How does Node work?</h3>
          <p>
            <strong>Ans</strong>: Node.js is a lean, fast, cross-platform
            JavaScript runtime environment that is useful for both servers and
            desktop applications.Node.js accepts the request from the clients
            and sends the response, while working with the request node.js
            handles them with a single thread. To operate I/O operations or
            requests node.js use the concept of threads. Thread is a sequence of
            instructions that the server needs to perform. It runs parallel on
            the server to provide the information to multiple clients. Node.js
            is an event loop single-threaded language. It can handle concurrent
            requests with a single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
