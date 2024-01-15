import React from "react";
import "./page-error.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="error">
      <img
        src="https://www.pngkit.com/png/full/212-2123468_404-hd.png"
        alt="page-not-found"
      />
      <p>Page not found</p>
      <Link to={"/"}>Go Back</Link>
    </div>
  );
};

export default PageNotFound;
