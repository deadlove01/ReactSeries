import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "../assets/MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${size} menu-item`}
      // onClick={() => history.push(`${match.url}${linkUrl}`)}
      onClick={() => navigate(`/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export { MenuItem };
