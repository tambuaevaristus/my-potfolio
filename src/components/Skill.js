import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Skill(props) {
  return (
    <div className="col-md-3 py-2">
      <Card
        sx={{
          minHeight: 300,
          backgroundColor: "transparent",
          margin: "auto",
          height: 300,
          maxHeight:300,
          paddingBottom:"4"
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="50"
            image={props.image}
            alt="green iguana"
            sx={{
              margin: "auto",
              marginTop: 4,
              maxWidth: 200,
            }}
          />
           <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
         
        </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
