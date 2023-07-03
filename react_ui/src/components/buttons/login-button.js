import React from "react";

export const LoginButton = () => {
  //const { loginWithRedirect } = useAuth();

  const handleLogin = async () => {
    // await loginWithRedirect({
    //   appState: {
    //     returnTo: "/profile",
    //   },
    // });
    window.location.href = "http://localhost:8000/saml2/login?next=/saml2/jwt";
  };

  return (
    <button className="button__login" onClick={handleLogin}>
      Log In
    </button>
  );
};