import {
  Box,
} from '@material-ui/core';
import React from 'react';
import './trees.scss';
import TreesIndex from '../../components/trees-index/trees-index';
import { Route } from "react-router-dom";

function Trees() {
  return (
    <Box className="wrapper">
      <Route path="/" component={TreesIndex} />
    </Box>
  );
}

export default Trees;
