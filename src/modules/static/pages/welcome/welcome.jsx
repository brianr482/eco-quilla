import {
  Box,
  Fab,
  Typography,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './welcome.module.scss';
import ecoQuillaLogo from '../../../../assets/eco-quilla-white-sh.svg';

function Welcome() {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles['home-section']}>
        <img src={ecoQuillaLogo} alt="eco-quilla-logo" />
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
