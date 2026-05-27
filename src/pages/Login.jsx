import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    IconEye,
    IconEyeOff,
} from "../components/common/Icons";

import logo from "../assets/logo-light.png";

import "./Login.css";

export default function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] =
        useState(false);

    const [showOtpModal, setShowOtpModal] =
        useState(false);

    const [showForgotModal, setShowForgotModal] =
        useState(false);

    const [resetEmail, setResetEmail] =
        useState("");

    const [resetSent, setResetSent] =
        useState(false);

    const [otp, setOtp] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [timer, setTimer] =
        useState(102);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    /* =========================================================
       INPUT CHANGE
    ========================================================= */

    const handleChange =
        (key) => (e) => {
            setForm((prev) => ({
                ...prev,
                [key]: e.target.value,
            }));
        };

    /* =========================================================
       LOGIN SUBMIT
    ========================================================= */

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !form.email ||
            !form.password
        ) {
            return;
        }
        setTimer(102);

        setShowOtpModal(true);
    };

    /* =========================================================
       OTP INPUT
    ========================================================= */

    const handleOtpChange =
        (index, value) => {
            if (!/^\d?$/.test(value))
                return;

            const updatedOtp = [...otp];

            updatedOtp[index] = value;

            setOtp(updatedOtp);

            // Move next

            if (
                value &&
                index < 5
            ) {
                document
                    .getElementById(
                        `otp-${index + 1}`
                    )
                    ?.focus();
            }

            // Move previous on backspace

            if (
                !value &&
                index > 0
            ) {
                document
                    .getElementById(
                        `otp-${index - 1}`
                    )
                    ?.focus();
            }
        };
    /* =========================================================
       VERIFY OTP
    ========================================================= */

    const handleVerifyOtp = () => {
        const enteredOtp =
            otp.join("");

        // DEMO OTP

        if (
            enteredOtp !== "123456"
        ) {
            alert(
                "Invalid OTP. Use 123456"
            );

            return;
        }

        setShowOtpModal(false);

        navigate("/");
    };
    useEffect(() => {
        let interval;

        if (
            showOtpModal &&
            timer > 0
        ) {
            interval = setInterval(() => {
                setTimer(
                    (prev) => prev - 1
                );
            }, 1000);
        }

        return () =>
            clearInterval(interval);
    }, [showOtpModal, timer]);
    const formatTime = (
        seconds
    ) => {
        const mins = Math.floor(
            seconds / 60
        );

        const secs = seconds % 60;

        return `${String(mins).padStart(
            2,
            "0"
        )}:${String(secs).padStart(
            2,
            "0"
        )}`;
    };
    return (
        <div className="login-page">
            {/* =====================================================
          LEFT SIDE
      ===================================================== */}

            <div className="login-left">
                <div className="login-brand">
                    <img
                        src={logo}
                        alt="MoveLogic"
                        className="login-logo"
                    />

                    <div className="login-badge">
                        AI Powered Admin Platform
                    </div>

                    <h1 className="login-heading">
                        Manage your entire
                        <span className="text-theme">
                            {" "}
                            moving operations
                        </span>{" "}
                        ecosystem.
                    </h1>

                    <p className="login-description">
                        Smart partner management,
                        AI-powered workflows,
                        analytics, surveys and
                        enterprise operations from a
                        single premium admin
                        dashboard.
                    </p>

                    <div className="login-feature-list">
                        <div className="login-feature-item">
                            <span>✓</span>

                            Real-time analytics &
                            insights
                        </div>

                        <div className="login-feature-item">
                            <span>✓</span>

                            AI-powered workflow
                            automation
                        </div>

                        <div className="login-feature-item">
                            <span>✓</span>

                            Secure enterprise admin
                            access
                        </div>
                    </div>
                </div>
            </div>

            {/* =====================================================
          RIGHT SIDE
      ===================================================== */}

            <div className="login-right">
                <div className="login-card">
                    <div className="login-card-glow" />

                    <div className="login-card-header">
                        <h2>
                            Welcome back
                        </h2>

                        <p>
                            Sign in to continue to your
                            admin dashboard.
                        </p>
                    </div>

                    {/* FORM */}

                    <form
                        className="login-form"
                        onSubmit={handleSubmit}
                    >
                        {/* EMAIL */}

                        <div className="login-field">
                            <label>
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange(
                                    "email"
                                )}
                                className="login-input"
                            />
                        </div>

                        {/* PASSWORD */}

                        <div className="login-field">
                            <label>Password</label>

                            <div className="password-wrapper">
                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter password"
                                    value={form.password}
                                    onChange={handleChange(
                                        "password"
                                    )}
                                    className="login-input"
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword ? (
                                        <IconEyeOff />
                                    ) : (
                                        <IconEye />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* OPTIONS */}

                        <div className="login-options">
                            <label className="remember-me">
                                <input type="checkbox" />

                                <span>
                                    Remember me
                                </span>
                            </label>

                            <button
                                type="button"
                                className="forgot-btn"
                                onClick={() =>
                                    setShowForgotModal(true)
                                }
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* LOGIN BUTTON */}

                        <button
                            type="submit"
                            className="login-btn"
                        >
                            <span>
                                Sign In
                            </span>

                            <svg
                                width="18"
                                height="18"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M5 12h14"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M13 6l6 6-6 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </form>

                    {/* FOOTER */}

                    <div className="login-footer">
                        Secure • Encrypted •
                        Enterprise Grade
                    </div>
                </div>
            </div>

            {/* =====================================================
          FORGOT PASSWORD MODAL
      ===================================================== */}

            {showForgotModal && (
                <div className="modal-overlay">
                    <div className="auth-modal">
                        <button
                            className="modal-close"
                            onClick={() => {
                                setShowForgotModal(false);

                                setResetSent(false);
                            }}
                        >
                            ×
                        </button>

                        {!resetSent ? (
                            <>
                                <h3>
                                    Forgot Password
                                </h3>

                                <p>
                                    Enter your registered
                                    email address to receive
                                    a password reset link.
                                </p>

                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    value={resetEmail}
                                    onChange={(e) =>
                                        setResetEmail(
                                            e.target.value
                                        )
                                    }
                                    className="login-input"
                                />

                                <button
                                    type="button"
                                    className="login-btn"
                                    onClick={() =>
                                        setResetSent(true)
                                    }
                                >
                                    Send Reset Link
                                </button>
                            </>
                        ) : (
                            <div className="success-state">
                                <div className="success-icon">
                                    ✓
                                </div>

                                <h3>
                                    Reset Link Sent
                                </h3>

                                <p>
                                    Please check your email
                                    inbox.
                                </p>

                                <button
                                    type="button"
                                    className="login-btn"
                                    onClick={() => {
                                        setShowForgotModal(false);

                                        setResetSent(false);
                                    }}
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* =====================================================
          OTP MODAL
      ===================================================== */}

            {showOtpModal && (
                <div className="modal-overlay">
                    <div className="auth-modal otp-modal">
                        <button
                            className="modal-close"
                            onClick={() =>
                                setShowOtpModal(false)
                            }
                        >
                            ×
                        </button>

                        <div className="otp-header">
                            <div className="otp-icon">
                                🔐
                            </div>

                            <h3>
                                Verify Login
                            </h3>

                            <p>
                                Enter the 6-digit OTP sent
                                to your registered email.
                            </p>
                        </div>

                        {/* OTP */}

                        <div className="otp-group">
                            {otp.map(
                                (digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        inputMode="numeric"
                                        autoComplete="one-time-code"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) =>
                                            handleOtpChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                        onKeyDown={(e) => {
                                            if (
                                                e.key ===
                                                "Backspace" &&
                                                !otp[index] &&
                                                index > 0
                                            ) {
                                                document
                                                    .getElementById(
                                                        `otp-${index - 1}`
                                                    )
                                                    ?.focus();
                                            }
                                        }}
                                        className="otp-input"
                                    />
                                )
                            )}
                        </div>

                        {/* VERIFY BUTTON */}

                        <button
                            type="button"
                            className="login-btn"
                            onClick={handleVerifyOtp}
                            disabled={
                                otp.join("").length < 6
                            }
                        >
                            Verify & Continue
                        </button>

                        <button
                            className="otp-resend-btn"
                            onClick={() => {
                                setTimer(102);

                                setOtp([
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                ]);
                            }}
                        >
                            Resend OTP
                        </button>
                        <div className="otp-timer">
                            OTP expires in{" "}
                            {formatTime(timer)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}