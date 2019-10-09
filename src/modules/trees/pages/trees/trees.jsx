import {
  Box,
} from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './trees.module.scss';
import TreesIndex from '../../components/trees-index/trees-index';
import TreeDetail from '../../components/tree-detail/tree-detail';

function Trees({ match }) {
  return (
    <Box className={styles.wrapper}>
      <Route exact path={`${match.url}`} component={TreesIndex} />
      <Route exact path={`${match.url}/:publicCode`} component={TreeDetail} />
    </Box>
  );
}

Trees.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Trees;
