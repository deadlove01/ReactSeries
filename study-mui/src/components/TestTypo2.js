import { Typography, Button } from "@mui/material";
import React from "react";

export const TestTypo2 = () => {
  return (
    <div>
      <Button size="small" variant="contained" color="success" >Primary</Button>
      <Button size="small" variant="contained" disabled>Disabled</Button>
      <Button size="small" variant="contained" href="#text-buttons">Link</Button>
      <br></br>
      <Button size="medium" variant="contained" color="error" >Primary</Button>
      <Button size="medium" variant="contained" disabled>Disabled</Button>
      <Button size="medium" variant="contained" href="#text-buttons">Link</Button>
      <br></br>
      <Button size="large" variant="contained" color="info">Primary</Button>
      <Button size="large" variant="contained" disabled>Disabled</Button>
      <Button size="large" variant="contained" href="#text-buttons">Link</Button>
      <br></br>

    </div>
  );
};
