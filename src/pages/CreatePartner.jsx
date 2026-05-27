import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import {
  IconChevronDown,
  IconChevronRight,
  IconEye,
  IconEyeOff,
  IconArrowRight,
  IconSupport,
  IconDocument,
} from "../components/common/Icons";

import "./CreatePartner.css";

/* US Flag SVG */
const USFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <rect width="20" height="14" rx="2" fill="#B22234" />
    <rect y="1.08" width="20" height="1.08" fill="white" />
    <rect y="3.23" width="20" height="1.08" fill="white" />
    <rect y="5.38" width="20" height="1.08" fill="white" />
    <rect y="7.54" width="20" height="1.08" fill="white" />
    <rect y="9.69" width="20" height="1.08" fill="white" />
    <rect y="11.85" width="20" height="1.08" fill="white" />
    <rect width="8" height="7.54" fill="#3C3B6E" />
  </svg>
);

function Field({
  label,
  required,
  children,
}) {
  return (
    <div className="cp-field">
      <label className="cp-label">
        {label}

        {required && (
          <span className="cp-required">
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}

function Section({
  number,
  title,
  description,
  children,
}) {
  return (
    <div className="cp-section-card">
      <div className="cp-section-grid">
        {/* LEFT */}

        <div className="cp-section-left">
          <div className="cp-section-top">
            <div className="cp-section-number">
              {number}
            </div>

            <span className="cp-section-title">
              {title}
            </span>
          </div>

          <p className="cp-section-description">
            {description}
          </p>
        </div>

        {/* RIGHT */}

        <div className="cp-section-right">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function CreatePartner() {
  const [showPass, setShowPass] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [status, setStatus] =
    useState("Active");

    const [form, setForm] = useState({
      companyName: "",
      businessEmail: "",
      businessPhone: "",
      businessAddress: "",
      adminName: "",
      adminEmail: "",
      password: "",
      confirmPassword: "",
      subdomain: "",
      countryCode: "+1",
    });

  const set =
    (key) => (e) =>
      setForm((f) => ({
        ...f,
        [key]: e.target.value,
      }));

  return (
    <DashboardLayout active="partners">
      <div className="create-partner-page">
        {/* Breadcrumb */}

        <div className="cp-breadcrumb">
          <span>Partners</span>

          <IconChevronRight />

          <span className="cp-breadcrumb-active">
            Create Partner
          </span>
        </div>

        {/* Header */}

        <div className="cp-header-row">
          {/* LEFT */}

          <div>
            <h1 className="cp-page-title">
              Create Partner
            </h1>

            <p className="cp-page-subtitle">
              Create a new partner company
              and set up the admin user.
            </p>
          </div>

          {/* RIGHT INFO CARD */}

          <div className="cp-info-card">
            <div className="cp-info-icon">
              <IconSupport />
            </div>

            <div>
              <div className="cp-info-title">
                Creating a partner
              </div>

              <div className="cp-info-text">
                Add the partner company
                details, admin user and
                choose a subdomain to get
                started.
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1 */}

        <Section
          number="1"
          title="Business Information"
          description="Enter partner company details."
        >
          <div className="cp-form-grid">
            <Field
              label="Company Name"
              required
            >
              <input
                className="cp-input"
                placeholder="Enter company name"
                value={form.companyName}
                onChange={set("companyName")}
              />
            </Field>

            <Field
              label="Business Email"
              required
            >
              <input
                className="cp-input"
                placeholder="Enter business email"
                value={form.businessEmail}
                onChange={set(
                  "businessEmail"
                )}
              />
            </Field>

            {/* PHONE */}

            <Field label="Business Phone">
  <div className="cp-phone-wrapper">
    {/* COUNTRY SELECT */}

    <div className="cp-country-select-wrapper">
      <select
        className="cp-country-select"
        value={form.countryCode}
        onChange={set("countryCode")}
      >
        <option value="+1">
          🇺🇸 US (+1)
        </option>

        <option value="+61">
          🇦🇺 Aus (+61)
        </option>

        <option value="+64">
          🇳🇿 NZ (+64)
        </option>
      </select>

      <div className="cp-country-chevron">
        <IconChevronDown />
      </div>
    </div>

    {/* PHONE INPUT */}

    <input
      className="cp-phone-input"
      placeholder="Enter phone number"
      value={form.businessPhone}
      onChange={set(
        "businessPhone"
      )}
    />
  </div>
</Field>

            <Field label="Business Address">
              <input
                className="cp-input"
                placeholder="Enter business address"
                value={form.businessAddress}
                onChange={set(
                  "businessAddress"
                )}
              />
            </Field>
          </div>
        </Section>

        {/* SECTION 2 */}

        <Section
          number="2"
          title="Admin User"
          description="Create the primary admin user for this partner."
        >
          <div className="cp-form-grid">
            <Field
              label="Admin Full Name"
              required
            >
              <input
                className="cp-input"
                placeholder="Enter admin full name"
                value={form.adminName}
                onChange={set("adminName")}
              />
            </Field>

            <Field
              label="Admin Email"
              required
            >
              <input
                className="cp-input"
                placeholder="Enter admin email"
                value={form.adminEmail}
                onChange={set("adminEmail")}
              />
            </Field>

            <Field
              label="Password"
              required
            >
              <div className="cp-password-wrapper">
                <input
                  type={
                    showPass
                      ? "text"
                      : "password"
                  }
                  className="cp-input"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={set("password")}
                />

                <button
                  className="cp-password-btn"
                  onClick={() =>
                    setShowPass(
                      (v) => !v
                    )
                  }
                >
                  {showPass ? (
                    <IconEyeOff />
                  ) : (
                    <IconEye />
                  )}
                </button>
              </div>
            </Field>

            <Field
              label="Confirm Password"
              required
            >
              <div className="cp-password-wrapper">
                <input
                  type={
                    showConfirm
                      ? "text"
                      : "password"
                  }
                  className="cp-input"
                  placeholder="Confirm password"
                  value={
                    form.confirmPassword
                  }
                  onChange={set(
                    "confirmPassword"
                  )}
                />

                <button
                  className="cp-password-btn"
                  onClick={() =>
                    setShowConfirm(
                      (v) => !v
                    )
                  }
                >
                  {showConfirm ? (
                    <IconEyeOff />
                  ) : (
                    <IconEye />
                  )}
                </button>
              </div>
            </Field>
          </div>
        </Section>

        {/* SECTION 3 */}

        <Section
          number="3"
          title="Subdomain & Status"
          description="Choose a unique subdomain and set account status."
        >
          <div className="cp-form-grid">
            {/* SUBDOMAIN */}

            <div>
              <Field
                label="Subdomain"
                required
              >
                <div className="cp-subdomain-wrapper">
                  <input
                    className="cp-subdomain-input"
                    placeholder="Enter subdomain"
                    value={form.subdomain}
                    onChange={set(
                      "subdomain"
                    )}
                  />

                  <div className="cp-subdomain-suffix">
                    .movelogic.ai
                  </div>
                </div>
              </Field>

              <p className="cp-helper">
                This will be your partner's
                login URL
              </p>
            </div>

            {/* STATUS */}

            <div>
              <Field
                label="Status"
                required
              >
                <div className="cp-status-wrapper">
                  <span
                    className={`cp-status-dot ${
                      status.toLowerCase()
                    }`}
                  />

                  <select
                    value={status}
                    onChange={(e) =>
                      setStatus(
                        e.target.value
                      )
                    }
                    className="cp-status-select"
                  >
                    <option>
                      Active
                    </option>

                    <option>
                      Trial
                    </option>

                    <option>
                      Suspended
                    </option>
                  </select>

                  <div className="cp-status-chevron">
                    <IconChevronDown />
                  </div>
                </div>
              </Field>

              <p className="cp-helper">
                You can change the status
                later
              </p>
            </div>
          </div>
        </Section>

        {/* ACTIONS */}

        <div className="cp-actions">
          <button className="cp-btn-outline">
            Cancel
          </button>

          <div className="cp-actions-right">
            <button className="cp-btn-dark">
              Save as Draft
            </button>

            <button className="cp-btn-primary">
              <IconDocument />

              <span>
                Create Partner
              </span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}