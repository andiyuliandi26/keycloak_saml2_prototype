import React, { Children } from "react";
import { NavBar } from "../components/navigation/desktop/nav-bar";
import { MobileNavBar } from "../components/navigation/mobile/mobile-nav-bar";

export const CallbackPage = () => {
  const params = new URLSearchParams(window.location.pathname);

  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content" />
    </div>
  );
};