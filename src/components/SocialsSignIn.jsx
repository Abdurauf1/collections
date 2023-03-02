import React from "react";
import Icon from "../components/Icon";
import GoogleIcon from "../assets/icons/google.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GitHubIcon from "../assets/icons/github.svg";

const SocialsSignIn = () => {
  return (
    <div className="mx-auto w-100">
      <a className="d-block w-100 border p-2 mb-1" href="#">
        <Icon icon={GoogleIcon} alt="google" />
        <span>Sign in with Google</span>
      </a>
      <a className="d-block w-100 border p-2 mb-1" href="#">
        <Icon icon={LinkedInIcon} alt="linkedin" />
        <span>Sign in with LinkedIn</span>
      </a>
      <a className="d-block w-100 border p-2 mb-1" href="#">
        <Icon icon={GitHubIcon} alt="github" />
        <span>Sign in with GitHub</span>
      </a>
    </div>
  );
};

export default SocialsSignIn;
