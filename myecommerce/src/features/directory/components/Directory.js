import React, { useState } from "react";

import "../assets/Directory.scss";
import DirectoryData from "../../../data/DirectoryData.json"
import { MenuItem } from "../../menu-item";

export const Directory = ({ title, imageUrl, size }) => {
  const [sections, setSections] = useState(DirectoryData.sections);


  return (
    <div className='directory-menu'>
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}  />
        ))}
      </div>
  );
};
