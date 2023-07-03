import React, { useEffect, useState, state  } from "react";
import QueryString from "query-string";
import { useNavigate, useLocation  } from "react-router-dom";

export const AuthProcess = () => {
  const [token, setToken_] = useState("");
  const setAuthToken = (newToken) => {
    console.log("Access token from Django : " + newToken);
    localStorage.setItem('token', newToken);
    setToken_(newToken);
  };

  const navigate = useNavigate();
  const locationObj = useLocation();
  const queryParams = QueryString.parse(locationObj.search);
  const getToken = queryParams.jwtToken;
  useEffect(() => {
    if (getToken) {
      setAuthToken(getToken);
      //redirect('/');

      //navigate('/', { replace: false });
    }
  }, [token]);
  //return null;
  return (
    <div>{getToken}</div>
  );
}