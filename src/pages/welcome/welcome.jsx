import {
  Box,
  Fab,
  Typography,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import React from 'react';
import './welcome.scss';

function Welcome() {
  return (
    <Box className="wrapper">
      <Box className="home-section">
        <Typography variant="h1">
          Bienvenido a EcoQuilla
        </Typography>
        <Fab variant="extended" aria-label="delete">
          Buscar árboles &nbsp;
          <SearchIcon />
        </Fab>
      </Box>
      <Box className="footer">
        <Typography variant="span">
          Cátedra Barranquilla 2019
        </Typography>
      </Box>
    </Box>
  );
}

export default Welcome;
