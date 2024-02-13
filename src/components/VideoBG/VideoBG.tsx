import "./VideoBG.css";
import { ArrowDownwardSharp } from "@mui/icons-material";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef, useState } from "react";

const VideoBG = () => {
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState<number>(0);

  useEffect(() => {
    if (videoPlayer.current) {
      videoPlayer.current.play();
      videoPlayer.current.volume = play;
    }
  }, []);

  useEffect(() => {
    if(videoPlayer.current){
      videoPlayer.current.volume = play;
    }
  },[play])

  return (
    <div className="video-container">
      <video
        ref={videoPlayer}
        controls={false}
        loop
        id="bg-video"
        style={{ height: "150vh" }}
      >
        <source src="./video1.mp4" type="video/mp4" />
      </video>
      <div className="border border-0">
        <Navbar showBg={false} play={play} setPlay={setPlay} />
        {/* <Typography variant="h4" className="content">The Debnath Films</Typography> */}
        <ArrowDownwardSharp className="down-arrow" />
      </div>
    </div>
  );
};

export default VideoBG;
