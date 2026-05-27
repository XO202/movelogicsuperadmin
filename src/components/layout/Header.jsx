import {
  IconSearch,
  IconBell,
  IconHelp,
  IconChevronDown,
} from "../common/Icons";
import { IconMenu } from "../common/Icons";
import "./Header.css";  
import { Link } from "react-router-dom";
function Header({
  setSidebarOpen,
}) {
  return (
    <header className="header">
      {/* Title */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <IconMenu size={20} />
      </button>
      <div className="header-brand">
        <span className="brand-title">MoveLogic</span>

        <span className="brand-ai">AI</span>

        <span className="brand-badge">Super Admin</span>
      </div>

      {/* Search */}
      <div className="header-search">
        <span className="search-icon">
          <IconSearch />
        </span>

        <input
          placeholder="Search partners, users, surveys..."
          className="search-input"
        />

        <span className="search-shortcut">⌘K</span>
      </div>

      {/* Right */}
      <div className="header-right">
        {/* Bell */}
        <div className="notification-wrapper">
          <button className="icon-btn">
            <IconBell />
          </button>

          <span className="notification-badge">12</span>
        </div>

        <button className="icon-btn">
          <IconHelp />
        </button>

        {/* Avatar */}
        <div className="profile-dropdown-wrapper">
  <button className="profile-trigger">
    <div className="avatar">
      SA
    </div>

    <div className="profile-info">
      <div className="user-name">
        Super Admin
      </div>

      <div className="user-company">
        Isoft Technologies
      </div>
    </div>

    <IconChevronDown />
  </button>

  <div className="profile-dropdown-menu">
      <div className="profile-trigger"> 

        <div className="profile-info">
          <div className="user-name">
            Super Admin
          </div>

          <div className="user-company">
            Isoft Technologies
          </div>
        </div>
    
      </div>
      <Link to="/login" className="back-link">
        <button className="dropdown-item logout-item">
          Logout
        </button>
    </Link>
  </div>
</div>
      </div>
    </header>
  );
}

export default Header;