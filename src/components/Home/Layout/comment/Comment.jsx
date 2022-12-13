import * as React from "react";
import List from "@mui/material/List";
import Comm from "./comm";
import "./style.css";

export default function Comment() {
  return (
    <div className="container">
      <div className="header-comment">
        <h1>Ismi & Aji</h1>
      </div>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 400,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        <Comm />
      </List>
    </div>
  );
}
