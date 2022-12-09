import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,  CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';


const Cards = ({item}) => {
   
  return (
<>
 
   {item.map((val)=>{
      return(
      
      
   
  <Grid   key={val.id} item xs={4}  >

      <Card  sx={{height:'350px'}}>
        <CardContent>
          <CardMedia
              component="img"
              height="180"
              image={val.img}
             
          />
          
          <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.description}
        </Typography>
        &nbsp;&nbsp;
      {/* $<s>2</s> &nbsp;&nbsp; 50% off&nbsp;&nbsp; <ins> {val.price}</ins>  */}

     <del> $2</del>  50% off <ins>{val.price}</ins>  
      </CardContent>
      <CardActions>
        
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
   
    
      </Grid>
       
      )
   
   })}

</>
  )

}

export default Cards;