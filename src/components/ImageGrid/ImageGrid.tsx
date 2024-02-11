import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GridItem from "../GridItem/GridItem";

export default function ImageGrid() {
  const images = [
    "Img1",
    "Img2",
    "Img3",
    "Img4",
    "Img5",
    "Img6",
    "Img7",
    "Img8",
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {images &&
          images.map((image) => (
            <Grid
              item
              xs={12} // Full width on small screens
              sm={6}  // Half width on medium screens
              md={3}  // Quarter width on large screens
              key={image}
              className="align-items-center justify-content-center d-flex"
            >
              <GridItem src={image} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}