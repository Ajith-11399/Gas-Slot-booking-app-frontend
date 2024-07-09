import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container text-center my-5 py-5">
      <p className="" style={{ "font-size": "80px" }}>
        OH, Oh!
      </p>
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="display-4 text-dark">Page Not Found</h2>
      <p className="lead text-muted mb-4">
        The page you're looking for doesn't exist in this website!
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
