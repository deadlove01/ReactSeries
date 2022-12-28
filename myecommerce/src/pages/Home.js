import React from "react";

import '../assets/Home.styles.scss'
import { Directory } from "../features/directory/components/Directory";

export const Home = () => {
  return (
    <div className="homepage">
        <Directory />
    </div>
  );
};
