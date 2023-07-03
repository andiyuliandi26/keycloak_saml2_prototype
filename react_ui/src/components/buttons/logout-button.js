import React, {useEffect, useState } from "react";

export const LogoutButton = () => {
  //const auth  = useAuth();
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const handleLogout = () => {

  localStorage.removeItem("token");
  window.location.href = "http://localhost:8000/saml2/logout";
  // useEffect(() => {
  //   if (getToken) {
  //     //setAuthToken(getToken);
      
  //   }
  // }, [token]);
    // console.log("Logout clicked");
    // auth.signOutRedirect({
    //   id_token_hint: auth.userData.id_token_hint,
    //   post_logout_redirect_uri: process.env.REACT_APP_OPENID_POST_LOGOUT
    // }
    // );

    // ({
    //   logoutParams: {
    //     returnTo: window.location.origin,
    //   },
    // });
  };

  return (
    <button className="button__logout" onClick={handleLogout}>
      Log Out
    </button>
  );
};