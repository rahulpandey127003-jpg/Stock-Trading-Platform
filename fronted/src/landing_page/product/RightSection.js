import React from "react";

function RightSection({
  imageURl,
  productName,
  productDescription,
  learnmore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnmore} className="text-decoration-none">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURl}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
