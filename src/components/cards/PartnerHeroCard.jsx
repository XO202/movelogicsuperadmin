import {
  IconExternal,
  IconCalendar,
} from "../common/Icons";

import "./PartnerHeroCard.css";

function PartnerHeroCard() {
  const details = [
    {
      label: "Subdomain",
      value: (
        <a href="#" className="partner-link">
          primemoves.movelogic.ai
          <IconExternal />
        </a>
      ),
    },
    {
      label: "Business Email",
      value: (
        <span className="partner-link">
          info@primemoves.com
        </span>
      ),
    },
    {
      label: "Phone Number",
      value: (
        <span className="partner-link">
          +1 (555) 987-6543
        </span>
      ),
    },
    {
      label: "Created On",
      value: (
        <span className="partner-created">
          <IconCalendar />
          May 10, 2025
        </span>
      ),
    },
  ];

  return (
    <div className="partner-hero-card">
      <div className="partner-hero-content">
        {/* Logo */}
        <div className="partner-logo-box">
          <div className="partner-logo-inner">
            <div className="partner-logo-text">
              <span>P</span>
              <span className="partner-logo-white">M</span>
            </div>

            <div className="partner-logo-subtitle">
              RELOCATIONS
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="partner-content">
          <div className="partner-header">
            <h2 className="partner-title">
              Prime Moving Solutions
            </h2>

            <span className="partner-status">
              <span className="status-dot" />
              Active
            </span>
          </div>

          <div className="partner-grid">
            {details.map((item) => (
              <div key={item.label}>
                <div className="partner-label">
                  {item.label}
                </div>

                {item.value}
              </div>
            ))}
          </div>

          <p className="partner-description">
            Premium moving services with AI-powered
            surveys and estimates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PartnerHeroCard;