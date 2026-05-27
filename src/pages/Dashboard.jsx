import { useState } from "react";

import { DateRange } from "react-date-range";

import { addDays } from "date-fns";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import DashboardLayout from "../components/layout/DashboardLayout";

import StatCard from "../components/cards/StatCard";
import CustomTooltip from "../components/charts/CustomTooltip";
import PartnersTable from "../components/tables/PartnersTable";

import {
  IconCalendar,
  IconChevronDown,
  StatIcon,
} from "../components/common/Icons";

import {
  chartData,
  partners,
} from "../components/data/dashboardData";

import "./Dashboard.css";

export default function Dashboard() {
  const [chartFilter, setChartFilter] =
    useState("Daily");

  const [showDateRange, setShowDateRange] =
    useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);


  return (
    <DashboardLayout active="dashboard">
      {/* Page title + date */}

      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">
            Dashboard
          </h1>

          <p className="dashboard-subtitle">
            High-level overview of the MoveLogic AI
            platform
          </p>
        </div>

        <div className="date-filter-wrapper">
          <button
            className="date-filter-btn"
            onClick={() =>
              setShowDateRange(
                !showDateRange
              )
            }
          >
            <IconCalendar />

            <span>
              {`${format(
                state[0].startDate,
                "dd MMM"
              )} – ${format(
                state[0].endDate,
                "dd MMM yyyy"
              )}`}
            </span>

            <IconChevronDown />
          </button>

          {showDateRange && (
            <div className="date-range-picker-dropdown">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => {
                  const selection = item.selection;
                
                  setState([selection]);
                
                  if (
                    selection.startDate &&
                    selection.endDate &&
                    selection.startDate.getTime() !==
                      selection.endDate.getTime()
                  ) {
                    setShowDateRange(false);
                  }
                }}
                moveRangeOnFirstSelection={false}
                ranges={state}
                rangeColors={["#22d3ee"]}
              />
            </div>
          )}
        </div>
      </div>

      {/* Stats Row */}

      <div className="stats-grid">
        <StatCard
          icon={
            <StatIcon bg="rgba(139,92,246,0.18)">
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
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
          change="8"
          changeType="up"
          changeLabel="this month"
        />

        <StatCard
          icon={
            <StatIcon bg="rgba(34,197,94,0.15)">
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
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
          change="6"
          changeType="up"
          changeLabel="this month"
        />

        <StatCard
          icon={
            <StatIcon bg="rgba(234,179,8,0.15)">
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
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
          change="3"
          changeType="up"
          changeLabel="this month"
        />

        <StatCard
          icon={
            <StatIcon bg="rgba(239,68,68,0.15)">
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
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
          change="2"
          changeType="down"
          changeLabel="this month"
        />
      </div>
      {/* Stats Row 2 */}

      {/* Stats Row 2 */}

      <div className="stats-grid">
        <StatCard
          icon={
            <StatIcon bg="rgba(59,130,246,0.16)">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect
                  x="5"
                  y="3"
                  width="14"
                  height="18"
                  rx="2"
                  stroke="#60a5fa"
                  strokeWidth="1.8"
                />

                <path
                  d="M9 7h6"
                  stroke="#60a5fa"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M9 11h6"
                  stroke="#60a5fa"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </StatIcon>
          }
          label="Surveys Created"
          value="2,842"
          change="18.6"
          changeType="up"
          changeLabel="vs last month"
        />

        <StatCard
          icon={
            <StatIcon bg="rgba(34,211,238,0.15)">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"
                  stroke="#22d3ee"
                  strokeWidth="1.8"
                />

                <path
                  d="M9 9c1-1.2 2-1.8 3-1.8s2 .6 3 1.8"
                  stroke="#22d3ee"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M9 15c1-1.2 2-1.8 3-1.8s2 .6 3 1.8"
                  stroke="#22d3ee"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M9 9v6"
                  stroke="#22d3ee"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M15 9v6"
                  stroke="#22d3ee"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </StatIcon>
          }
          label="AI Processing Usage"
          value="6,721"
          change="22.4"
          changeType="up"
          changeLabel="vs last month"
        />

        <StatCard
          icon={
            <StatIcon bg="rgba(168,85,247,0.15)">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 3h7l5 5v13H7z"
                  stroke="#a855f7"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M14 3v5h5"
                  stroke="#a855f7"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M10 13h4"
                  stroke="#a855f7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M10 17h4"
                  stroke="#a855f7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </StatIcon>
          }
          label="Estimates Shared"
          value="1,986"
          change="19.3"
          changeType="up"
          changeLabel="vs last month"
        />

        <StatCard
          icon={
            <StatIcon bg="rgba(245,158,11,0.15)">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="#f59e0b"
                  strokeWidth="1.8"
                />

                <path
                  d="M12 8v8"
                  stroke="#f59e0b"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M9.5 10.5c0-1.2 1-2 2.5-2s2.5.8 2.5 2-1 2-2.5 2-2.5.8-2.5 2 1 2 2.5 2 2.5-.8 2.5-2"
                  stroke="#f59e0b"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </StatIcon>
          }
          label="Platform Revenue"
          value="$48,760"
          change="15.7"
          changeType="up"
          changeLabel="vs last month"
        />
      </div>


      {/* Chart */}

      <div className="chart-card">
        <div className="chart-header">
          <h2 className="chart-title">
            Operational Activity
          </h2>

          <select
            value={chartFilter}
            onChange={(e) =>
              setChartFilter(e.target.value)
            }
            className="chart-filter"
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        <ResponsiveContainer
          width="100%"
          height={200}
        >
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e2535"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              tick={{
                fill: "#8c95a6",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#8c95a6",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Legend
              wrapperStyle={{
                paddingBottom: 0,
                fontSize: 12,
              }}
              iconType="circle"
              iconSize={8}
              formatter={(v) => (
                <span
                  style={{ color: "#8b95a8" }}
                >
                  {v}
                </span>
              )}
            />

            <Line
              type="monotone"
              dataKey="surveys"
              name="Surveys Created"
              stroke="#22d3ee"
              strokeWidth={2}
              dot={{
                fill: "#22d3ee",
                r: 4,
                strokeWidth: 0,
              }}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="ai"
              name="AI Processing Usage"
              stroke="#a855f7"
              strokeWidth={2}
              dot={{
                fill: "#a855f7",
                r: 4,
                strokeWidth: 0,
              }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Partners Table */}

      <PartnersTable partners={partners} />
    </DashboardLayout>
  );
}