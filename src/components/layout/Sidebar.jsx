import {
  IconDashboard,
  IconPartners,
  IconLink,
  IconArrowRight,
} from "../common/Icons";

import logo from "../../assets/logo-light.png";
import { Link } from "react-router-dom";

import "./Sidebar.css";

function Sidebar({
  active,
  sidebarOpen,
  setSidebarOpen,
}) {
  const nav = [
    {
      label: "Dashboard",
      icon: <IconDashboard />,
      key: "dashboard",
      path: "/",
    },
    {
      label: "Partners",
      icon: <IconPartners />,
      key: "partners",
      path: "/partners",
    },
  ];

  return (
    <>
      <aside
        className={`sidebar ${sidebarOpen ? "open" : ""
          }`}
      >
        {/* Logo */}
        <div className="sidebar-logo-wrapper">
          <div className="sidebar-logo-inner">
            <div className="sidebar-logo-box">

             <Link to="/" className="back-link">
              <img
                src={logo}
                alt="Logo"
                className="sidebar-logo"
              />
              </Link>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          {nav.map((item) => {
            const isActive = item.key === active;

            return (
              <Link
                key={item.key}
                to={item.path}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Quick Links */}
        <div className="quick-links">
          <div className="quick-links-header">
            <div className="quick-links-icon">
              <IconLink />
            </div>

            <span className="quick-links-title">
              Quick Links
            </span>
          </div>
          <Link to="/partners/create" className="back-link">
            <button className="quick-link-btn">
              Create Partner
              <IconArrowRight />
            </button>
          </Link>
          <Link to="/partners" className="back-link">
            <button className="quick-link-btn">
              View All Partners
              <IconArrowRight />
            </button>
          </Link>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}
    </>
  );
}

export default Sidebar;