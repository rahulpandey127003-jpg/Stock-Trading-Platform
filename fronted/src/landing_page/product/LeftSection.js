import React from "react";

function LeftSection({
  imageURl,
  productName,
  productDescription,
  tryDemo,
  learnmore,
  googlePlay,
  apppStore,
}) {
  return (
  <div className="container mt-5">
    <div className="row">
        <div className="col-6">
            <img src={imageURl}></img>
        </div>
        <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
            <a href={tryDemo} className="text-decoration-none">Try Demo</a>
            <a href={learnmore} style={{marginLeft:"50px"}} className="text-decoration-none p-5">Learn More</a>
            </div>
            <div className="mt-3">
            <a href={googlePlay}><img src="https://stocktrade-demo.xyz/media/googlePlayBadge.svg"/></a>
            <a href={apppStore} className="p-5"><img src="https://stocktrade-demo.xyz/media/appstoreBadge.svg"/></a>
            </div>
        </div>
    </div>
  </div>
)}

export default LeftSection;
