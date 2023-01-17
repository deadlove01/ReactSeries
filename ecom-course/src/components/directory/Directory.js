import React from "react";
import MenuItem from "../menu-item/menu-item";

import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections && sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
