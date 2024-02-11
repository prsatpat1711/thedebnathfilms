import React from "react";
import "./VideoBG.css";
import { Typography } from "@mui/material";
import { ArrowDownwardSharp } from "@mui/icons-material";
import Navbar from "../Navbar/Navbar";

const VideoBG = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop id="bg-video" style={{ height: "150vh"}}>
        <source src="./video1.mp4" type="video/mp4" />
      </video>
      <div className="border border-0">
        <Navbar showBg={false}/>
        {/* <Typography variant="h4" className="content">The Debnath Films</Typography> */}
        <ArrowDownwardSharp className="down-arrow"/> 
      </div>
    </div>
  );
};

export default VideoBG;
