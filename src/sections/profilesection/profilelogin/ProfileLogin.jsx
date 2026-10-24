import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight, User, Mail, LockKeyhole } from "lucide-react";
import "./ProfileLogin.css";

const ProfileLogin = ({ onLogin }) => {
    const [mode, setMode] = useState("login");
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (mode === "signup" && !formData.fullName.trim()) {
            alert("Please enter your full name.");
            return;
        }

        if (!formData.email.trim()) {
            alert("Please enter your email.");
            return;
        }

        if (!formData.password.trim()) {
            alert("Please enter your password.");
            return;
        }

        const existingUser =
            JSON.parse(localStorage.getItem("stylematch-user")) || {};

        const userData =
            mode === "signup"
                ? {
                      ...existingUser,
                      fullName: formData.fullName,
                      email: formData.email
                  }
                : {
                      ...existingUser,
                      fullName: existingUser.fullName || "StyleMatch User",
                      email: formData.email
                  };

        localStorage.setItem("stylematch-user", JSON.stringify(userData));

        if (onLogin) {
            onLogin();
        }
    };

    const switchMode = () => {
        setMode((previous) => previous === "login" ? "signup" : "login");

        setFormData({
            fullName: "",
            email: "",
            password: ""
        });

        setShowPassword(false);
    };

    return (
        <section className="profile-login-section">
            <div className="profile-login-container">
                <div className="profile-login-intro">
                    <h1>
                        Your style,
                        <br />
                        <em>your space.</em>
                    </h1>

                    <p>
                        Save your favorites, track your orders,
                        and keep everything you love in one place.
                    </p>
                </div>

                <div className="profile-login-card">
                    <div className="profile-login-card-header">
                        <span>
                            {mode === "login" ? "WELCOME BACK" : "CREATE ACCOUNT"}
                        </span>

                        <h2>
                            {mode === "login" ? "Sign in" : "Join StyleMatch"}
                        </h2>

                        <p>
                            {mode === "login"
                                ? "Access your StyleMatch account."
                                : "Create your account and start styling."}
                        </p>
                    </div>

                    <form className="profile-login-form" onSubmit={handleSubmit}>
                        {mode === "signup" && (
                            <div className="profile-input-group">
                                <label>FULL NAME</label>

                                <div className="profile-input-wrapper">
                                    <User size={17} />

                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="profile-input-group">
                            <label>EMAIL ADDRESS</label>

                            <div className="profile-input-wrapper">
                                <Mail size={17} />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="profile-input-group">
                            <label>PASSWORD</label>

                            <div className="profile-input-wrapper">
                                <LockKeyhole size={17} />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <button
                                    type="button"
                                    className="profile-password-toggle"
                                    onClick={() => setShowPassword((previous) => !previous)}
                                    aria-label={showPassword ? "Hide password" : "Show password"} >
                                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                                </button>
                            </div>
                        </div>

                        {mode === "login" && (
                            <div className="profile-login-options">
                                <label className="profile-remember">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>

                                <button
                                    type="button"
                                    className="profile-forgot-button"
                                    onClick={() => alert("Password reset will be available soon.")} >
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <button type="submit" className="profile-submit-button">
                            <span>
                                {mode === "login" ? "SIGN IN" : "CREATE ACCOUNT"}
                            </span>

                            <ArrowRight size={17} />
                        </button>
                    </form>

                    <div className="profile-login-switch">
                        <span>
                            {mode === "login"
                                ? "Don't have an account?"
                                : "Already have an account?"}
                        </span>

                        <button type="button" onClick={switchMode}>
                            {mode === "login" ? "Create account" : "Sign in"}
                        </button>
                    </div>

                    <div className="profile-login-security">
                        <LockKeyhole size={14} />

                        <span>
                            Your account information stays private.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileLogin;