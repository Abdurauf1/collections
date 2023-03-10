import React from "react";

const SocialIcon = ({ icon, alt }) => {
  const iconStyles = {
    width: "2rem",
  };
  return <img style={iconStyles} src={icon} alt={alt} />;
};

export default SocialIcon;
