import React from 'react';
import {Card, CardActions, CardMedia, Grid, Typography, IconButton} from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import useLocalStorage from '../useLocalStorage';


function CharacterItem({char,countLikes, setCountLikes}) {
    const [isLiked, setIsLiked] = useLocalStorage(`${char.name}`, () => "");
     
    function setActiveItem() {
        setIsLiked(char)
        setCountLikes(countLikes + 1)
         if(isLiked.id === char.id) {
            localStorage.removeItem(`${char.name}`);
            setIsLiked('');
            setCountLikes(countLikes - 1);   
         }                         
    } 
            
  return (
    <Grid item xs={12} md={4}>
        <Card sx={{height: '100%'}}>
            <CardMedia 
                component="img"
                image={char.image}
                alt={char.name}/>
                <Grid container sx={{justifyContent: 'space-between'}}>
                    <Grid item>
                        <Typography ml='15px' variant="h6" component="h3">{char.name}</Typography>
                        <Typography ml='15px'>Species: {char.species}</Typography>
                        <Typography ml='15px'>Gender: {char.gender}</Typography>
                    </Grid>
                    <Grid item >
                        <CardActions>
                            <IconButton onClick={() => setActiveItem()}>
                            {isLiked && isLiked !=='' ? <Favorite color='primary'/> : <FavoriteBorder color='primary'/>}
                            </IconButton>
                        </CardActions>
                    </Grid>                    
                </Grid>            
        </Card>     
    </Grid>
  )
}

export default CharacterItem