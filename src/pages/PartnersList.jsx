import { useState } from "react";

import {
  IconFilter,
  IconPlus,
  IconChevronLeft,
  IconChevronRight,
} from "../components/common/Icons";
import {
  IconCalendar,
  IconChevronDown,
  StatIcon,
} from "../components/common/Icons";
import DashboardLayout from "../components/layout/DashboardLayout";

import { Link } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import StatCard from "../components/cards/StatCard";

import { partners } from "../components/data/dashboardData";

import PartnersManagementTable from "../components/tables/PartnersManagementTable";

import "./PartnersList.css";

/* ─────────────────────────── PAGINATION ─────────────────────────── */

function Pagination({
  current,
  total,
  onPage,
}) {
  return (
    <div className="pagination">
      <button
        onClick={() =>
          onPage(Math.max(1, current - 1))
        }
        className="pagination-btn"
      >
        <IconChevronLeft />
      </button>

      {[1, 2, 3].map((n) => (
        <button
          key={n}
          onClick={() => onPage(n)}
          className={`pagination-number ${current === n ? "active" : ""
            }`}
        >
          {n}
        </button>
      ))}

      <span className="pagination-dots">
        ...
      </span>

      <button
        onClick={() => onPage(16)}
        className={`pagination-number ${current === 16 ? "active" : ""
          }`}
      >
        16
      </button>

      <button
        onClick={() =>
          onPage(Math.min(16, current + 1))
        }
        className="pagination-btn"
      >
        <IconChevronRight />
      </button>
    </div>
  );
}

/* ─────────────────────────── MAIN ─────────────────────────── */

export default function PartnersList() {
  const [currentPage, setCurrentPage] =
    useState(1);

  const [perPage, setPerPage] =
    useState("10 / page");

  return (
    <DashboardLayout active="partners">

      <div className="partners-page">


        <div className="partners-content">


          <main className="">
            {/* Header */}

            <div className="partners-header">
              <div>
                <h1 className="partners-title">
                  Partners List
                </h1>

                <p className="partners-subtitle">
                  Manage all partner companies on the
                  MoveLogic AI platform
                </p>
              </div>

              <div className="partners-actions">
                <div className="filter-dropdown-wrapper">
                  <button className="filter-btn">
                    <IconFilter />
                    Filters
                  </button>

                  <div className="filter-dropdown-menu">
                    <button className="filter-dropdown-item">
                      Active Partners
                    </button>

                    <button className="filter-dropdown-item">
                      Trial Accounts
                    </button>

                    <button className="filter-dropdown-item">
                      Suspended Accounts
                    </button>

                    <button className="filter-dropdown-item">
                      Recently Added
                    </button>
                  </div>
                </div>
                <Link to="/partners/create" className="back-link">
                  <button className="create-btn">
                    <IconPlus />
                    Create Partner
                  </button>
                </Link>
              </div>
            </div>

            {/* Stat Cards */}

            <div className="partners-stats-grid">
              <StatCard
                icon={
                  <StatIcon bg="rgba(139,92,246,0.18)">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="9"
                        cy="7"
                        r="3"
                        stroke="#a78bfa"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M3 20c0-3 2.686-5 6-5s6 2 6 5"
                        stroke="#a78bfa"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <circle
                        cx="17"
                        cy="8"
                        r="2.5"
                        stroke="#a78bfa"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M21 20c0-2.2-1.8-4-4-4"
                        stroke="#a78bfa"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </StatIcon>
                }
                label="Total Partners"
                value="128"
                changeType="up"
                changeLabel="All partner companies"
              />

              <StatCard
                icon={
                  <StatIcon bg="rgba(34,197,94,0.15)">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="9"
                        cy="7"
                        r="3"
                        stroke="#4ade80"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M3 20c0-3 2.686-5 6-5s6 2 6 5"
                        stroke="#4ade80"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <path
                        d="M16 11l2 2 4-4"
                        stroke="#4ade80"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </StatIcon>
                }
                label="Active Partners"
                value="98"
                change="76.6%"
                changeType="up"
                changeLabel="of total partners"


              />

              <StatCard
                icon={
                  <StatIcon bg="rgba(234,179,8,0.15)">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="#facc15"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M12 7v5l3 3"
                        stroke="#facc15"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </StatIcon>
                }
                label="Trial Accounts"
                value="18"
                change="14.1%"
                changeType="warning"
                changeLabel="of total partners"
              />

              <StatCard
                icon={
                  <StatIcon bg="rgba(239,68,68,0.15)">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="9"
                        cy="7"
                        r="3"
                        stroke="#f87171"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M3 20c0-3 2.686-5 6-5s6 2 6 5"
                        stroke="#f87171"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <line
                        x1="17"
                        y1="10"
                        x2="23"
                        y2="16"
                        stroke="#f87171"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <line
                        x1="23"
                        y1="10"
                        x2="17"
                        y2="16"
                        stroke="#f87171"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </StatIcon>
                }
                label="Suspended Accounts"
                value="12"
                change="9.3%"
                changeType="danger"
                changeLabel="of total partners"
              />
            </div>

            {/* Table */}

            <PartnersManagementTable
              partners={partners}
            />

            {/* Footer */}

            <div className="partners-footer">
              <span className="partners-footer-text">
                Showing 1 to 8 of 128 partners
              </span>

              <div className="partners-footer-right">
                <Pagination
                  current={currentPage}
                  total={16}
                  onPage={setCurrentPage}
                />

                <div className="per-page-wrapper">
                  <select
                    value={perPage}
                    onChange={(e) =>
                      setPerPage(e.target.value)
                    }
                    className="per-page-select"
                  >
                    <option>10 / page</option>
                    <option>20 / page</option>
                    <option>50 / page</option>
                  </select>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
}