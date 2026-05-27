import { useState } from "react";
import {
  IconExternal,
  IconView,
  IconEdit,
  IconPause,
  IconChevronRight,
  IconArrowLeft,
  IconCompany,
  IconModules,
  IconBilling,
  IconUsage,
  IconSurvey,
  IconEstimates,
  IconClock,
  IconAISurvey,
  IconEstimatesModule,
  IconCustomerPortal,
  IconPDF,
  IconTeam,
  IconCalendar,
} from "../components/common/Icons";
import DashboardLayout from "../components/layout/DashboardLayout";

import { Link } from "react-router-dom";
import PartnerHeroCard from "../components/cards/PartnerHeroCard";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import "./PartnerDetails.css";

/* ─────────────────────────── TOGGLE ─────────────────────────── */
function Toggle({ on, onChange }) {
  return (
    <div
      onClick={() => onChange(!on)}
      className={`toggle ${on ? "active" : "inactive"}`}
    >
      <div className={`toggle-thumb ${on ? "on" : "off"}`} />
    </div>
  );
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */
export default function PartnerDetails() {
  const [modules, setModules] = useState({
    aiSurvey: true,
    estimates: true,
    customerPortal: true,
    pdfEstimates: true,
    teamManagement: true,
  });

  const toggleModule = (key) => {
    setModules((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const modulesList = [
    {
      key: "aiSurvey",
      label: "AI Survey",
      icon: <IconAISurvey />,
    },
    {
      key: "estimates",
      label: "Estimates",
      icon: <IconEstimatesModule />,
    },
    {
      key: "customerPortal",
      label: "Customer Portal",
      icon: <IconCustomerPortal />,
    },
    {
      key: "pdfEstimates",
      label: "PDF Estimates",
      icon: <IconPDF />,
    },
    {
      key: "teamManagement",
      label: "Team Management",
      icon: <IconTeam />,
    },
  ];

  return (
    <DashboardLayout active="partners">

    <div className="partner-details-page">
     

      <div className="partner-details-content">
         

        <main className="">

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span className="breadcrumb-link">Partners</span>
            <IconChevronRight />
            <span className="breadcrumb-active">
              Partner Details
            </span>
          </div>

          {/* Header */}
          <div className="page-header">
            <div>
              <h1 className="page-title">
                Partner Details
              </h1>

              <p className="page-subtitle">
                View and manage partner company information and settings.
              </p>
            </div>

            <Link to="/partners" className="back-link">
              <button className="back-btn">
                <IconArrowLeft />
                Back to Partners
              </button>
            </Link>
          </div>

          {/* Hero Card */}
          <PartnerHeroCard />

          {/* 3 Column Grid */}
          <div className="details-grid">

            {/* Company Profile */}
            <div className="card-dark">
              <div className="card-header">
                <IconCompany />
                <span className="card-title">
                  Company Profile
                </span>
              </div>

              <div className="card-body">

                {[
                  {
                    label: "Company Name",
                    value: "Prime Moving Solutions",
                  },
                  {
                    label: "Business Email",
                    value: "info@primemoves.com",
                  },
                  {
                    label: "Business Phone",
                    value: "+1 (555) 987-6543",
                  },
                  {
                    label: "Business Address",
                    value:
                      "123 Moving Lane, Suite 100\nAustin, TX 78701, USA",
                  },
                  {
                    label: "Subdomain",
                    value: "primemoves.movelogic.ai",
                    isLink: true,
                  },
                  {
                    label: "Status",
                    value: "Active",
                    isStatus: true,
                  },
                ].map((row) => (
                  <div key={row.label} className="info-row">

                    <span className="info-label">
                      {row.label}
                    </span>

                    {row.isLink ? (
                      <a href="#" className="info-link">
                        {row.value}
                        <IconExternal />
                      </a>
                    ) : row.isStatus ? (
                      <span className="status-inline">
                        <span className="status-dot" />
                        {row.value}
                      </span>
                    ) : (
                      <span className="info-value">
                        {row.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <button className="btn-outline">
                Edit Profile
              </button>
            </div>

            {/* Modules */}
            <div className="card-dark">

              <div className="card-header">
                <IconModules />
                <span className="card-title">
                  Modules
                </span>
              </div>

              <p className="card-subtitle">
                Manage modules and features for this partner.
              </p>

              <div className="card-body">

                {modulesList.map((mod) => (
                  <div key={mod.key} className="module-row">

                    <div className="module-left">
                      {mod.icon}

                      <span className="module-label">
                        {mod.label}
                      </span>
                    </div>

                    <Toggle
                      on={modules[mod.key]}
                      onChange={() => toggleModule(mod.key)}
                    />
                  </div>
                ))}
              </div>

              <button className="btn-outline">
                Manage Modules
              </button>
            </div>

            {/* Billing */}
            <div className="card-dark">

              <div className="card-header">
                <IconBilling />
                <span className="card-title">
                  Billing & Plan
                </span>
              </div>

              <p className="card-subtitle">
                Manage billing and subscription details.
              </p>

              <div className="card-body">

                <div className="billing-row">
                  <span className="billing-label">
                    Plan
                  </span>

                  <span className="plan-badge">
                    Trial
                  </span>
                </div>

                <div className="billing-row">
                  <span className="billing-label">
                    Status
                  </span>

                  <span className="active-badge">
                    Active
                  </span>
                </div>

                <div className="billing-row">
                  <span className="billing-label">
                    Trial Ends On
                  </span>

                  <span className="info-value">
                    <IconCalendar />
                    {" "}June 10, 2025 <span className="warning">(30 days left)</span>
                  </span>
                </div>

                <div className="billing-row">
                  <span className="billing-label">
                    Payment Status
                  </span>

                  <span className="status-inline">
                    <span className="status-dot" />
                    No Payment Required
                  </span>
                </div>

              </div>

              <button className="btn-outline">
                Manage Billing
              </button>
            </div>
          </div>

          {/* Usage */}
          <div className="usage-card">

            <div className="usage-header">
              <IconUsage />

              <h2 className="usage-title">
                Usage Overview
                <span className="usage-subtitle">
                  {" "} (This Month)
                </span>
              </h2>
            </div>

            <div className="usage-grid">

              <div className="usage-item">
                <div
                  className="usage-icon"
                  style={{
                    background: "rgba(139,92,246,0.15)",
                  }}
                >
                  <IconSurvey />
                </div>

                <div>
                  <div className="usage-label">
                    Surveys Created
                  </div>

                  <div className="usage-value">
                    24
                  </div>
                </div>
              </div>

              <div className="usage-item">
                <div
                  className="usage-icon"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                  }}
                >
                  <IconEstimates />
                </div>

                <div>
                  <div className="usage-label">
                    Estimates Shared
                  </div>

                  <div className="usage-value">
                    18
                  </div>
                </div>
              </div>

              <div className="usage-item">
                <div
                  className="usage-icon"
                  style={{
                    background: "rgba(234,179,8,0.12)",
                  }}
                >
                  <IconClock />
                </div>

                <div>
                  <div className="usage-label">
                    Last Activity
                  </div>

                  <div className="usage-value usage-value-small">
                    May 24, 2025, 09:58 AM
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Actions */}
          <div className="bottom-actions">

            <div className="left-actions">

              <button className="action-btn1">
                <IconView />
                View Partner
              </button>

              <button className="action-btn1">
                <IconEdit />
                Edit Partner
              </button>

            </div>

            <button className="action-btn1 action-btn1-danger">
              <IconPause />
              Suspend Partner
            </button>

          </div>

        </main>
      </div>
    </div>
    </DashboardLayout>
  );
}