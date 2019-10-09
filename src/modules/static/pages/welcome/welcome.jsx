import {
  Box,
  Fab,
  Typography,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './welcome.module.scss';

function Welcome() {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles['home-section']}>
        <Typography variant="h1">
          Bienvenido a EcoQuilla
        </Typography>
        <Fab
          variant="extended"
          aria-label="delete"
          component={Link}
          to="/trees"
        >
          Buscar árboles &nbsp;
          <SearchIcon />
        </Fab>
      </Box>
      <Box className={styles.footer}>
        <Typography variant="body1">
          Cátedra Barranquilla 2019
        </Typography>
      </Box>
    </Box>
  );
}

export default Welcome;
