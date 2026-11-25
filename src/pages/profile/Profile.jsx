import React, { useState } from "react";
import ProfileLogin from "../../sections/profilesection/profilelogin/ProfileLogin";
import ProfileDashboard from "../../sections/profilesection/profiledashboard/ProfileDashboard";
import { createUser, loginUser } from "../../api/apiService";

import {useNavigate} from "react-router-dom"

const Profile = ({ onLogin, onLogout }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("stylematchLoggedIn") === "true"
  );

  const handleLogin = async(userData, mode) => {
    // console.log(userData);
    // console.log(mode);
    try{
      if(mode == "signup") {
        await createUser(userData);
        navigate('/');
      }

      if(mode == "login") {
        await loginUser(userData);
        navigate("/");
      }
    }
    catch(err){
      console.log(err);
    }


    // localStorage.setItem("stylematchLoggedIn", "true");
    // setIsLoggedIn(true);

    // if (onLogin) {
    //   onLogin();
    // }
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