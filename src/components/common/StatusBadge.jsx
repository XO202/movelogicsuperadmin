import "./StatusBadge.css";

function StatusBadge({ status }) {
  const map = {
    Active: {
      bg: "rgba(34,197,94,0.12)",
      color: "#22c55e",
      border: "rgba(34,197,94,0.3)",
    },

    Trial: {
      bg: "rgba(168,85,247,0.15)",
      color: "#c084fc",
      border: "rgba(168,85,247,0.3)",
    },

    Suspended: {
      bg: "rgba(239,68,68,0.12)",
      color: "#f87171",
      border: "rgba(239,68,68,0.3)",
    },
  };

  const s = map[status] || map.Active;

  return (
    <span
      className="status-badge"
      style={{
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
      }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;