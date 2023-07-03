import React, { useEffect, useState } from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import QueryString from "query-string";
import { useNavigate, useLocation  } from "react-router-dom";

export const HomePage = () => {
  const [token, setToken_] = useState("");
  const setAuthToken = (newToken) => {
    console.log("Access token from Django : " + newToken);
    localStorage.setItem('token', newToken);
    setToken_(newToken);
  };

  const locationObj = useLocation();
  const queryParams = QueryString.parse(locationObj.search);
  const getToken = queryParams.jwtToken;
  useEffect(() => {
    if (getToken) {
      setAuthToken(getToken);      
    }
  }, [token]);

  return(
    <PageLayout>
      <HeroBanner />
      {/* <Auth0Features /> */}
    </PageLayout>
  );
}
