import React, { useEffect, useState } from "react";
import { Camera, Save, X, UserRound } from "lucide-react";
import "./ProfileEdit.css";

const ProfileEdit = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        profilePic: ""
    });

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || "",
                email: user.email || "",
                phone: user.phone || "",
                dob: user.dob || "",
                gender: user.gender || "",
                address: user.address || "",
                profilePic: user.profilePic || ""
            });
        }
    }, [user]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("Please select an image below 2MB.");
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData((previous) => ({
                ...previous,
                profilePic: reader.result
            }));
        };

        reader.readAsDataURL(file);
    };

    const removeProfilePicture = () => {
        setFormData((previous) => ({
            ...previous,
            profilePic: ""
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.fullName.trim()) {
            alert("Please enter your name.");
            return;
        }

        if (!formData.email.trim()) {
            alert("Please enter your email.");
            return;
        }

        const updatedUser = {
            ...user,
            ...formData
        };

        localStorage.setItem("stylematch-user", JSON.stringify(updatedUser));
        onSave(updatedUser);
    };

    return (
        <section className="profile-edit-section">
            <div className="profile-edit-header">
                <div>
                    <h2>Edit Profile</h2>
                    <p>Update your personal information and profile picture.</p>
                </div>

                <button type="button" className="profile-edit-close" onClick={onCancel} aria-label="Close">
                    <X size={20} />
                </button>
            </div>

            <form className="profile-edit-form" onSubmit={handleSubmit}>
                <div className="profile-picture-edit">
                    <div className="profile-picture-preview">
                        {formData.profilePic ? (
                            <img src={formData.profilePic} alt="Profile" />
                        ) : (
                            <UserRound size={48} />
                        )}
                    </div>

                    <div className="profile-picture-actions">
                        <h3>Profile Picture</h3>
                        <p>JPG, PNG or WEBP. Maximum 2MB.</p>

                        <div className="profile-picture-buttons">
                            <label htmlFor="profile-picture-upload" className="upload-picture-button">
                                <Camera size={16} />
                                Change Photo
                            </label>

                            <input
                                id="profile-picture-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                hidden
                            />

                            {formData.profilePic && (
                                <button type="button" className="remove-picture-button" onClick={removeProfilePicture}>
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="profile-edit-card">
                    <div className="profile-edit-card-title">
                        <span>01</span>

                        <div>
                            <h3>Personal Information</h3>
                        </div>
                    </div>

                    <div className="profile-form-grid">
                        <div className="profile-form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="profile-form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="profile-form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="profile-form-group">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="profile-form-group">
                            <label>Gender</label>

                            <select name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">Select gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="profile-edit-card">
                    <div className="profile-edit-card-title">
                        <span>02</span>

                        <div>
                            <h3>Address</h3>
                        </div>
                    </div>

                    <div className="profile-form-group">
                        <label>Address</label>

                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            rows="4"
                        />
                    </div>
                </div>

                <div className="profile-edit-footer">
                    <button type="button" className="profile-cancel-button" onClick={onCancel}>
                        Cancel
                    </button>

                    <button type="submit" className="profile-save-button">
                        <Save size={17} />
                        Save Changes
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ProfileEdit;