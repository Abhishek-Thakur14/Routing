import React from "react";

const Home = () => {
  return (
    <>
      <div className="a px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Hello People</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the worlds most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Getting Started
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Contact-Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
