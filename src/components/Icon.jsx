import React from "react";

const Icon = ({ icon, alt }) => {
  const iconStyles = {
    width: "2rem",
  };
  return <img style={iconStyles} src={icon} alt={alt} />;
};

export default Icon;
