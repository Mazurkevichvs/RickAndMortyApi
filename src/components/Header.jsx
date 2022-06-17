import React from 'react';
import { Favorite } from '@mui/icons-material';
import { AppBar, Badge, Toolbar, Typography, IconButton } from '@mui/material';
import {Link} from 'react-router-dom';

function Header({countLikes}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h6' component="span" sx={{flexGrow: 1}}>
        <Link to='/'>Rick and Morty</Link>
        </Typography>
        <Link to='/LikedCharacters'>
        <IconButton color='inherit'>
          <Badge color="secondary"
          badgeContent={countLikes}>
            <Favorite/>
          </Badge>
        </IconButton>
        </Link> 
      </Toolbar>
    </AppBar>
  )
}

export default Header