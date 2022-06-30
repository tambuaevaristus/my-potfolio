import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ExperienceItem(props) {
  return (
   <div className="col-md-4 col-lg-3 my-2 mx-auto">
     <Card sx={{ maxWidth: 345, maxHeight:400, minHeight:400, paddingX:0,paddingY:0, }}>
      <CardActionArea
       sx={{
       backgroundColor:"transparent",
      }}>
        <CardMedia
          sx={{
            maxHeight:"160px",
            minHeight:"160px",
            maxWidth:"100%",
            minWidth:"100%",
          }}
          component="img"
          padding="4"
          image={`${props.image}?fit=contain`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Typography variant="body2" color="primary">
            Duration : {props.duration}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
   </div>
  );
}
