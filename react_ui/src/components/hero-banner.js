import React from "react";

export const HeroBanner = () => {
  const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Hello, React World!</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for React apps using <strong>Keycloak with SAML2 Protocol and Django as a backend Service Provider</strong>.
      </p>
      {/* <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.auth0.com/resources/code-samples/spa/react/basic-authentication"
        className="button button--secondary"
      >
        Check out the React code sample →
      </a> */}
    </div>
  );
};