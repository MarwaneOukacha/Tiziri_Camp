import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserPlus,
  FaUsers,
  FaCalendarCheck,
  FaSignOutAlt,
  FaUserCircle,
  FaBars,
  FaRunning,
  FaTicketAlt,
} from "react-icons/fa";
import "../Sidebar.css";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/",
    icon: <FaHome />,
  },
  {
    name: "All Activities",
    href: "/AllActivities",
    icon: <FaRunning />,
  },
  {
    name: "All Bookings",
    href: "/allBookings",
    icon: <FaTicketAlt />,
  },
  {
    name: "All Users",
    href: "/allUsers",
    icon: <FaUsers />,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: <FaCalendarCheck />,
  },
];

function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen width is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isMobile ? "mobile" : ""}`}>
        <div className="logo">
          <span className="Title">TIZIRI Desert Adventures</span>
        </div>

        <div className="menu">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.href}
              key={item.name}
              className={({ isActive }) =>
                `menu-item ${isActive ? "active" : ""}`
              }
            >
              <span className="menu-item-icon">{item.icon}</span>
              <span className="menu-item-text">{item.name}</span>
            </NavLink>
          ))}
        </div>

        <div className="user-section">
          <FaUserCircle className="user-icon" />
          <div className="user-info">
            <span className="user-name">Admin</span>
            <Link to="/" className="logout-button">
              <FaSignOutAlt />
              <span className="user-logout">Logout</span>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
