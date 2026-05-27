import StatusBadge from "../common/StatusBadge";
import PartnerAvatar from "../common/PartnerAvatar";
import { Link } from "react-router-dom";
import {
  IconArrowRight,
  IconExternal,
  IconDots,
} from "../common/Icons";

import "./PartnersTable.css";

function PartnersTable({ partners }) {
  return (
    <>
      <div className="partners-overview-card">
        {/* Header */}

        <div className="partners-overview-header">
          <h2 className="partners-overview-title">
            Partners Overview
          </h2>
          <Link to="/partners" className="back-link">
          <button className="view-all-btn">
            View all partners
            <IconArrowRight />
          </button>
          </Link>
        </div>

        {/* Table */}

        <table className="partners-overview-table">
          <thead>
            <tr className="partners-table-head-row">
              {[
                "Partner Company",
                "Subdomain",
                "Status",
                "Active Users",
                "Surveys Created",
                "Estimates Shared",
                "Last Activity",
                "",
              ].map((h) => (
                <th
                  key={h}
                  className="partners-table-head"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {partners.map((p, i) => (
              <tr
                key={p.id}
                className={`partners-table-row ${
                  i < partners.length - 1
                    ? "partners-table-row-border"
                    : ""
                }`}
              >
                {/* Company */}

                <td className="partners-table-cell">
                  <div className="partner-company-info">
                    <PartnerAvatar
                      initials={p.initials}
                      color={p.color}
                    />

                    <span className="partner-company-name">
                      {p.name}
                    </span>
                  </div>
                </td>

                {/* Subdomain */}

                <td className="partners-table-cell">
                  <a
                    href="#"
                    className="partner-subdomain-link"
                  >
                    {p.subdomain}
                    <IconExternal />
                  </a>
                </td>

                {/* Status */}

                <td className="partners-table-cell">
                  <StatusBadge status={p.status} />
                </td>

                {/* Users */}

                <td className="partners-table-cell table-value">
                  {p.users}
                </td>

                {/* Surveys */}

                <td className="partners-table-cell table-value">
                  {p.surveys}
                </td>

                {/* Estimates */}

                <td className="partners-table-cell table-value">
                  {p.estimates}
                </td>

                {/* Last Activity */}

                <td className="partners-table-cell table-last-activity">
                  {p.lastActivity}
                </td>

                {/* Action */}

                <td className="partners-table-cell">
                <div className="table-action-dropdown">
                  <button className="dots-btn">
                    <IconDots />
                  </button>

                  <div className="table-action-menu">
                  <Link to="/partners/details" className="back-link">
                    <button className="table-action-item">
                      View
                    </button>
                    </Link>

                    <Link to="/partners/create" className="back-link">
                    <button className="table-action-item">
                      Edit
                    </button>
                    </Link>
                  </div>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PartnersTable;