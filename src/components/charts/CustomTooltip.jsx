import "./CustomTooltip.css";

const CustomTooltip = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">
          {label}
        </p>

        {payload.map((p) => (
          <div
            key={p.dataKey}
            className="tooltip-item"
            style={{ color: p.color }}
          >
            <span>{p.name}:</span>

            <span className="tooltip-value">
              {p.value}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;