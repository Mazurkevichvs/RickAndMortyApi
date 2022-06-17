import React from 'react';
import {Header} from '../components';
import { Grid, Container } from '@mui/material';
import CharacterItem from '../components/CharacterItem'

function LikedCharacters({charList, countLikes, setCountLikes}) {
  
  
  return (
    <>
      <Header countLikes={countLikes}/>
        <Container>
          <Grid container spacing={2} mt="50px">
            {charList.length ? charList.map(el => <CharacterItem key={el.id} char={el}  countLikes={countLikes} setCountLikes={setCountLikes}/> ) : 
            <p>There is no liked characters :(</p>}          
          </Grid>
      </Container>
      
    
    
    </>
  )
}

export default LikedCharacters