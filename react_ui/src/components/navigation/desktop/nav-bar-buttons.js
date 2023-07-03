import { useAuth } from '../../../provider/auth-Provider';
import React from "react";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/signup-button";

export const NavBarButtons = () => {
  const { token } = useAuth();
  console.log(token);
  return (
    <div className="nav-bar__buttons">
      {token == null && (
        <>
          {/* <SignupButston /> */}
          <LoginButton />
        </>
      )}
      
      {token && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};