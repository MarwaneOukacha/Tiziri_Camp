import React from "react";
import { FaSignInAlt } from "react-icons/fa"; // Import the login icon
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll for smooth scrolling

export const Navigation = (props) => {
  const location = useLocation();

  // Helper function to conditionally render links
  const renderLink = (to, label) => {
    if (location.pathname === "/") {
      return (
        <ScrollLink to={to} smooth={true} duration={500} className="page-scroll">
          {label}
        </ScrollLink>
      );
    } else {
      return (
        <Link to="/" className="page-scroll">
          {label}
        </Link>
      );
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          {/* Conditionally render ScrollLink or Link for the brand */}
          {location.pathname === "/" ? (
            <ScrollLink
              to="page-top"
              smooth={true}
              duration={500}
              className="navbar-brand page-scroll"
            >
              Zagora Desert Tour
            </ScrollLink>
          ) : (
            <Link to="/" className="navbar-brand page-scroll">
              Zagora Desert Tour
            </Link>
          )}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>{renderLink("features", "Excursions")}</li>
            <li>{renderLink("about", "About")}</li>
            <li>{renderLink("services", "Services")}</li>
            <li>{renderLink("testimonials", "Testimonials")}</li>
            <li>{renderLink("team", "Team")}</li>
            <li>{renderLink("contact", "Contact")}</li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};
