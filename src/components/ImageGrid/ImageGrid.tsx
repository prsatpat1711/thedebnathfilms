import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GridItem from "../GridItem/GridItem";
import data from './Images.json'

interface imageData {
  name: string;
  src: string;
  description: string;
}

export default function ImageGrid() {
  const images: imageData[] = data;

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
              key={image.src}
              className="align-items-center justify-content-center d-flex"
            >
              <GridItem image={image} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}