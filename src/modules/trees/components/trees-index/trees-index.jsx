import {
  Box,
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import './trees-index.scss';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

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
    <Box className="wrapper">
      <Card className="card">
        <CardContent>
          <Typography variant="h5">
            Lista de árboles
          </Typography>
          <Table className="main-table">
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
        <CardActions>
          <Button size="small">Regresar</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

TreesIndex.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(TreesIndex);
