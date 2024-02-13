// GridItem.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface GridItemProps {
  image: imageData;
}

interface imageData {
  name: string;
  src: string;
  description: string;
}

const GridItem: React.FC<GridItemProps> = ({ image }) => {
  return (
    <Card sx={{ width: 340 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`./${image.src}.jpg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {image.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {image.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GridItem;
