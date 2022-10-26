import React from "react";

const Blogs = () => {
  return (
    <div className="mx-6 pb-6">
      <header>
        <h1 className="mt-[40px] text-center text-3xl">
          Some important question about React.
        </h1>
      </header>
      <main>
        <div className="mt-[20px] p-6 bg-[#AAC4FF] border-2 rounded-xl">
          <h3 className="font-bold">
            Question 01: what is the purpose of react router?
          </h3>
          <p>
            <strong>Ans</strong>:
          </p>
        </div>
        <div className="mt-[20px] p-6 bg-[#AAC4FF]  border-2 rounded-xl">
          <h3 className="font-bold">Question 02 : how context api works ?</h3>
          <p>
            <strong>Ans</strong>:
          </p>
        </div>
        <div className="mt-[20px] p-6 bg-[#AAC4FF]  border-2 rounded-xl">
          <h3 className="font-bold">Question 03 : what is useRef in react?</h3>
          <p>
            <strong>Ans</strong>:
          </p>
        </div>
      </main>
    </div>
  );
};

export default Blogs;
