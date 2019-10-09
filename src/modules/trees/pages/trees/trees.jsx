import {
  Box,
} from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router-dom';
import styles from './trees.module.scss';
import TreesIndex from '../../components/trees-index/trees-index';

function Trees() {
  return (
    <Box className={styles.wrapper}>
      <Route path="/" component={TreesIndex} />
    </Box>
  );
}

export default Trees;
