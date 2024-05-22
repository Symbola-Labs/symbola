import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {

    // click handler
    const handleClick = (e) => {
        window.open(props.link, '_blank');
    };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          borderRadius="0px"
          image={props.image}
          alt={props.title}
        />
        <CardContent sx={{ backgroundColor: '#292929', color: '#fff'}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="#fff">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}