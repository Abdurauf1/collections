import React from "react";
import Icon from "./SocialIcon";
import GoogleIcon from "../assets/icons/google.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GitHubIcon from "../assets/icons/github.svg";

const SocialsSignIn = () => {
  const linkStyles = {
    width: "3rem",
  };
  return (
    <div className="d-flex">
      <a
        className="p-1 rounded-circle d-flex align-items-center justify-content-center bg-light"
        style={linkStyles}
        href=""
      >
        <Icon icon={GoogleIcon} alt="google" />
      </a>
      <a
        className="p-1 rounded-circle d-flex align-items-center justify-content-center bg-light"
        style={linkStyles}
        href=""
      >
        <Icon icon={LinkedInIcon} alt="linkedin" />
      </a>
      <a
        className="p-1 rounded-circle d-flex align-items-center justify-content-center bg-light"
        style={linkStyles}
        href=""
      >
        <Icon icon={GitHubIcon} alt="github" />
      </a>
    </div>
  );
};

export default SocialsSignIn;
