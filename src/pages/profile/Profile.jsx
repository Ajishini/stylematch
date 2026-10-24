import React, { useState } from "react";
import ProfileLogin from "../../sections/profilesection/profilelogin/ProfileLogin";
import ProfileDashboard from "../../sections/profilesection/profiledashboard/ProfileDashboard";

const Profile = ({ onLogin, onLogout }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("stylematchLoggedIn") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("stylematchLoggedIn", "true");
    setIsLoggedIn(true);

    if (onLogin) {
      onLogin();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("stylematchLoggedIn");
    setIsLoggedIn(false);

    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <ProfileLogin onLogin={handleLogin} />
      ) : (
        <ProfileDashboard onLogout={handleLogout} />
      )}
    </div>
  );
};

export default Profile;