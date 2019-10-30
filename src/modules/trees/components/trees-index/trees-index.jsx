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
  Fab,
  Tooltip,
  CircularProgress,
  TablePagination,
} from '@material-ui/core';
import { useList } from 'react-firebase-hooks/database';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import firebase from '../../../../firebase';
import styles from './trees-index.module.scss';

function TreesIndex({ history, location }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [snapshots, loading, error] = useList(firebase.database().ref('trees'));
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log('SB', snapshots);
  
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {loading
            && (
            <Box mt={1}>
              <CircularProgress />
            </Box>
            )}
            {!loading && !error && snapshots
            && (
            <div>
              <Table className={styles['main-table']}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Especie</TableCell>
                    <TableCell>Ubicación</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {snapshots.map((snapshot) => (
                    <TableRow
                      key={snapshot.key}
                      onClick={
                        () => history.push(
                          `${location.pathname}/${snapshot.key}`,
                        )
                      }
                      hover
                    >
                      <TableCell
                        component="th"
                        scope="row"
                      >
                        {snapshot.val().name}
                      </TableCell>
                      <TableCell>{snapshot.val().species}</TableCell>
                      <TableCell>{snapshot.val().zone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={snapshots.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                  'aria-label': 'Página anterior',
                }}
                nextIconButtonProps={{
                  'aria-label': 'Siguiente página',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </div>
            )}
          </Box>
        </CardContent>
      </Card>
      <Tooltip title="Escanear QR" aria-label="go to qr reader">
        <Fab
          color="secondary"
          aria-label="camera"
          className={styles['camera-action-button']}
          component={Link}
          to={`${location.pathname}/search`}
        >
          <CameraAltIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}

TreesIndex.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(TreesIndex);
