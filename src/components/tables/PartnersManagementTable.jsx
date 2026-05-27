import React, { useState } from "react";
import {
  IconExternal,
  IconView,
  IconEdit,
  IconHeadset,
  IconPause,
  IconSuspend,
} from "../common/Icons";

import StatusBadge from "../common/StatusBadge";
import { Link } from "react-router-dom";

import "./PartnersManagementTable.css";

/* Avatar */

function Avatar({ initials, bg, color }) {
  return (
    <div
      className="partner-avatar-box"
      style={{
        background: bg,
        border: `1.5px solid ${color}44`,
        color,
      }}
    >
      {initials}
    </div>
  );
}

/* Legend Row */

function LegendItem({ icon, iconBg, label, desc }) {
  return (
    <div className="legend-item">
      <div
        className="legend-icon"
        style={{ background: iconBg }}
      >
        {icon}
      </div>

      <div>
        <div className="legend-label">
          {label}
        </div>

        <div className="legend-desc">
          {desc}
        </div>
      </div>
    </div>
  );
}

/* Action Button */

function ActionBtn({ icon, color, border }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="action-btn"
      style={{
        border: `1px solid ${border || "#1e4a6e"}`,
        background: hovered ? `${color}18` : "transparent",
        color,
      }}
    >
      {icon}
    </button>
  );
}

function PartnersManagementTable({ partners }) {
  return (
    <div className="partners-table-wrapper">
      <table className="partners-table">
        <thead>
          <tr className="table-head-row">
            {[
              "Company Name",
              "Subdomain",
              "Status",
              "Surveys Created",
              "Estimates Shared",
              "Last Activity",
              "Actions",
            ].map((h) => (
              <th key={h} className="table-head">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {partners.map((p, i) => (
            <tr
              key={p.id}
              className={`table-row ${
                i < partners.length - 1
                  ? "table-row-border"
                  : ""
              }`}
            >
              {/* Company */}
              <td className="table-cell">
                <div className="company-info">
                  <Avatar
                    initials={p.initials}
                    bg={p.bg}
                    color={p.color}
                  />

                  <span className="company-name">
                    {p.name}
                  </span>
                </div>
              </td>

              {/* Subdomain */}
              <td className="table-cell">
                <a href="#" className="subdomain-link">
                  {p.sub}
                  <IconExternal />
                </a>
              </td>

              {/* Status */}
              <td className="table-cell">
                <StatusBadge status={p.status} />
              </td>

              {/* Surveys */}
              <td className="table-cell table-value">
                {p.surveys}
              </td>

              {/* Estimates */}
              <td className="table-cell table-value">
                {p.estimates}
              </td>

              {/* Last Activity */}
              <td className="table-cell table-last-activity">
                {p.lastActivity}
              </td>

              {/* Actions */}
              <td className="table-cell">
                <div className="actions-group">
                  <Link
                    to="/partners/details"
                    className="action-link"
                  >
                    <ActionBtn
                      icon={<IconView />}
                      color="#22d3ee"
                    />
                  </Link>

                  <ActionBtn
                    icon={<IconEdit />}
                    color="#22d3ee"
                    border="#1e4a6e"
                  />

                  <ActionBtn
                    icon={<IconHeadset />}
                    color="#22d3ee"
                    border="#1e4a6e"
                  />

                  <ActionBtn
                    icon={<IconPause />}
                    color="#f87171"
                    border="rgba(239,68,68,0.35)"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend Row */}

      <div className="legend-row">
        <LegendItem
          icon={<IconView />}
          iconBg="rgba(34,211,238,0.1)"
          label="View Partner"
          desc="View partner details"
        />

        <LegendItem
          icon={<IconEdit />}
          iconBg="rgba(34,211,238,0.1)"
          label="Edit Partner"
          desc="Edit partner information"
        />

        <LegendItem
          icon={<IconHeadset />}
          iconBg="rgba(34,211,238,0.1)"
          label="Support Access"
          desc="Enter support mode"
        />

        <LegendItem
          icon={<IconPause />}
          iconBg="rgba(239,68,68,0.1)"
          label="Suspend Partner"
          desc="Suspend this partner account"
        />
      </div>
    </div>
  );
}

export default PartnersManagementTable;