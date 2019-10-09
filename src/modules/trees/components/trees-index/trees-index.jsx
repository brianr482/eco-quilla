import {
  Box,
  Card,
  Typography,
  CardContent,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  IconButton,
} from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './trees-index.module.scss';

const dummyRows = [
  {
    name: 'Roble amarillo',
    location: 'Zona sur',
    age: '10 años',
    publicCode: 'a4g2jfh',
  },
];

function TreesIndex({ history, location }) {
  return (
    <Box className={styles.wrapper}>
      <Card className={styles.card}>
        <CardContent>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Box mr={0.5}>
              <IconButton
                aria-label="delete"
                component={Link}
                to="/"
              >
                <KeyboardArrowLeftIcon fontSize="small" />
              </IconButton>
            </Box>
            <Typography variant="h5">
              Lista de árboles
            </Typography>
          </Box>
          <Table className={styles['main-table']}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Ubicación</TableCell>
                <TableCell>Edad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyRows.map((row) => (
                <TableRow
                  key={row.name}
                  onClick={
                    () => history.push(
                      `${location.pathname}/${row.publicCode}`,
                    )
                  }
                  hover
                >
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
}

TreesIndex.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(TreesIndex);
