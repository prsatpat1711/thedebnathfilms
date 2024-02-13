import VideoBG from "../../components/VideoBG/VideoBG";
import "./HomePage.css";
import { Typography } from "@mui/material";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import ImagesList from "../../components/ImagesList/ImageList";

const HomePage = () => {
  return (
    <div className="homepage-div">
      <VideoBG />
      <div className="bg-danger m-0" style={{ height: "auto" }}>
        <Typography
          variant="h3"
          align="center"
          className="text-white pt-2"
          gutterBottom
          fontFamily={"AlexBrush"}
          fontSize={80}
        >
          Checkout our albums
        </Typography>
        <ImageGrid />
        <Typography
          variant="h6"
          align="center"
          className="text-white pt-4 mb-0"
          gutterBottom
          fontFamily={"OldStandard"}
        >
          We are wanderers, explorers of light, driven by a strong desire to
          capture fleeting moments onto frames and stitching them together to
          create a visual symphony which is both organic and timeless. We do not
          follow trends and have our own unique non-linear approach of
          presenting stories. Our wedding films are carefully crafted to blend
          traditional with modern, combining stunning visuals with creative
          storytelling .
        </Typography>
      </div>
      <div
        className="d-flex flex-column bg-danger justify-content-center align-items-center w-100 pb-3"
        style={{ height: "auto" }}
      >
        <Typography
          variant="h3"
          align="center"
          className="text-white pt-2"
          gutterBottom
          fontFamily={"AlexBrush"}
          fontSize={80}
        >
          Checkout our images
        </Typography>
        <ImagesList />
      </div>
    </div>
  );
};

export default HomePage;
