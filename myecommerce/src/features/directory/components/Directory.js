import React, { useState } from "react";

import "../assets/Directory.scss";
import DirectoryData from "../../../data/DirectoryData.json"
import { MenuItem } from "../../menu-item";

export const Directory = () => {
  const [sections, setSections] = useState(DirectoryData.sections);


  return (
    <div className='directory-menu'>
        {sections.map(({id, ...otherProps}) => (
          <MenuItem key={id} {...otherProps}  />
        ))}
      </div>
  );
};
