import React from 'react';
import {Header, CharacterItem} from '../components';
import { Container, Grid , Stack, Pagination} from '@mui/material';

  

function Characters({loading, error, charList, setPages, countLikes, setCountLikes}) {

  function onChangePage(pageNumber) {
    setPages(parseInt(pageNumber))
  }
  return (
    <>
    <Header countLikes={countLikes}/>
    <Container>  
      <Grid container spacing={2} mt="50px">
        {error ? <p>Error: {error.message}</p> : loading ? <p>Loading...</p> : 
        charList.map(char => <CharacterItem key={char.id} char={char} countLikes={countLikes} setCountLikes={setCountLikes}/>) }         
      </Grid>
      <Stack spacing={2} mt="20px">
        <Pagination 
        count={12} 
        color="primary" 
        onChange={(e) => onChangePage(e.target.textContent)} 
        sx={{display: 'flex', justifyContent : "center"}}/>
      </Stack>
    </Container>
    </>
    
  )
}

export default Characters