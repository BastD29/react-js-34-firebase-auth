// import { signOut } from "firebase/auth";

import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signout } from "../firebase";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signout();
  };

  if (!user) {
    return <Navigate replace to="/signin" />;
  } else
    return (
      <>
        <p>Profile</p>
        <button onClick={handleSignOut}>Sign out</button>
      </>
    );
};

export default Profile;
