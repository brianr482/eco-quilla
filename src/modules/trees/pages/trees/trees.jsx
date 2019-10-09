import {
  Box,
} from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './trees.module.scss';
import TreesIndex from '../../components/trees-index/trees-index';
import TreeDetail from '../../components/tree-detail/tree-detail';
import TreeQrReader from '../../components/tree-qr-reader/tree-qr-reader';

function Trees({ match }) {
  return (
    <Box className={styles.wrapper}>
      <Switch>
        <Route exact path={`${match.url}`} component={TreesIndex} />
        <Route exact path={`${match.url}/search`} component={TreeQrReader} />
        <Route exact path={`${match.url}/:publicCode`} component={TreeDetail} />
      </Switch>
    </Box>
  );
}

Trees.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Trees;
