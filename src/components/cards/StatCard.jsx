import "./StatCard.css";

function StatCard({
  icon,
  label,
  value,
  change,
  changeType,
  changeLabel,
}) {
  const isPositive = changeType === "up";

  return (
    <div className="stat-card">
      {icon}

      <div>
        <div className="stat-label">
          {label}
        </div>

        <div className="stat-value">
          {value}
        </div>

        {(change || changeLabel) && (
          <div
            className={`stat-change ${
              changeType === "warning"
                ? "warning"
                : changeType === "danger"
                ? "danger"
                : isPositive
                ? "positive"
                : "negative"
            }`}
          >
            {changeType !== "warning" &&
              changeType !== "danger" && (
                <span>{isPositive ? "↑" : "↓"}</span>
              )}

            <span className="stat-change-value">
              {change}
            </span>

            <span className="stat-change-label">
              {changeLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;