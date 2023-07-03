import React from "react";

export const SignupButton = () => {
 // const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    // await loginWithRedirect({
    //   appState: {
    //     returnTo: "/profile",
    //   },
    //   authorizationParams: {
    //     screen_hint: "signup",
    //   },
    // });
  };

  return (
    <button className="button__sign-up" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};