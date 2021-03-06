import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectItem(props) {
  return (
    <div className="col-md-4 my-4 px-2">
      <Card sx={{
        minHeight:400,
        maxheight:400,
      }}>
        <CardMedia
          component="img"
          alt="green iguana"
          // minheight="140"
          sx={{
            backgroundColor:"orange",
            maxHeight: 200,
            minHeight: 200,
          }}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <a className="nav-link" href={props.link} hrefsize="small">visit site</a>
          <a className="nav-link" href={props.link} hrefsize="small">Learn More</a>
        </CardActions>
      </Card>
    </div>
  );
}
