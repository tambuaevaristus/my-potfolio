import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Skill(props) {
  return (
    <Card sx={{ minHeight:300, margin:'auto', minWidth: 250, height:300, width: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image={props.image}
          alt="green iguana"
          sx={{
            marginX:'auto',
            marginTop:4,
            maxWidth:200,
          }}
        />
        
      </CardActionArea>
    </Card>
  );
}
