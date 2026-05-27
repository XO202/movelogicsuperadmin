import "./PartnerAvatar.css";

function PartnerAvatar({ initials, color }) {
  return (
    <div
      className="partner-avatar"
      style={{
        background: color + "33",
        border: `1px solid ${color}55`,
        color,
      }}
    >
      {initials}
    </div>
  );
}

export default PartnerAvatar;