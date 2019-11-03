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
import dgEcoQuillaLogo from '../../../../assets/eco-quilla-dg.svg'

function Trees({ match }) {
  return (
    <Box className={styles.wrapper}>
      <Switch>
        <Route exact path={`${match.url}`} component={TreesIndex} />
        <Route exact path={`${match.url}/search`} component={TreeQrReader} />
        <Route exact path={`${match.url}/:id`} component={TreeDetail} />
      </Switch>
      <img
        src={dgEcoQuillaLogo}
        className={styles.footer}
        alt="eco-quilla-logo"
      />
    </Box>
  );
}

Trees.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Trees;
