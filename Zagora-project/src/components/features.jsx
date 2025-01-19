import React, { useEffect } from "react";
import '../Features.css';  // Import the CSS file
import { CiCircleMore } from "react-icons/ci";
import { Navigate, useNavigate } from "react-router-dom";

export const Features = ({ data }) => {  // Destructure `data` directly from props
  const navigate = useNavigate();
  useEffect(() => {
  }, [data]);  // Run effect when `data` changes

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="section-title-text">Zagora Desert Tours</h2>
        </div>
        <div className="row">
          {/* Check if data is an array and has content */}
          {Array.isArray(data) && data.length > 0 ? (
            data.map((feature, index) => (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card custom-card">
                  {/* Card Image */}
                  <img src={feature.img} className="card-img-top" alt={feature.title} />
                  <div className="card-body">
                    {/* Card Title */}
                    <h5 className="card-title">{feature.title}</h5>
                    {/* Card Text / Paragraph */}
                    <p className="card-text">{feature.text}</p>
                    {/* View More Button */}
                    <button className="btn btn-primary" onClick={() => { navigate(`/excursion/${feature.id}`) }}>
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No features available.</p>  // Fallback when no features
          )}
        </div>
      </div>
    </div>
  );
};