import {
  Box,
  Card,
  Typography,
  CardContent,
  IconButton,
  CircularProgress,
  Button,
} from '@material-ui/core';
import Img from 'react-image';
import { useObjectVal } from 'react-firebase-hooks/database';
import ReactHtmlParser from 'react-html-parser';
import React from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SentimentVeryDissatisfiedIcon from
  '@material-ui/icons/SentimentVeryDissatisfied';
import firebase from '../../../../firebase';
import styles from './tree-detail.module.scss';

function TreeDetail({ match }) {
  const [tree, loading, error] = useObjectVal(
    firebase.database().ref(`trees/${match.params.id}`),
  );
  return (
    <Box className={styles.wrapper}>
      <Card className={styles.card}>
        <Box>
          <CardContent className={styles['card-content']}>
            {loading
            && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={1}
              >
                <CircularProgress />
              </Box>
            )}
            {tree
            && (
            <div>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Box mr={0.5}>
                  <IconButton
                    aria-label="delete"
                    component={Link}
                    to="/trees"
                  >
                    <KeyboardArrowLeftIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="h5">
                  {tree.name}
                </Typography>
              </Box>
              <Box mb={0.75}>
                <Typography variant="subtitle2" color="textSecondary">
                  {tree.species && tree.species}
                  {tree.zone && ` | ${tree.zone}`}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                align="justify"
                color="textSecondary"
                paragraph
              >
                <b>Descripción</b>
                :&nbsp;
                {ReactHtmlParser(tree.description)}
              </Typography>
              {tree.family
              && (
              <Typography
                variant="body2"
                align="justify"
                color="textSecondary"
                paragraph
              >
                <b>Familia</b>
                :&nbsp;
                {tree.family}
              </Typography>
              )}
              {tree.distribution
              && (
              <Typography
                variant="body2"
                align="justify"
                color="textSecondary"
                paragraph
              >
                <b>Distribución</b>
                :&nbsp;
                {ReactHtmlParser(tree.distribution)}
              </Typography>
              )}
              {tree.cropAndUsages
              && (
              <Typography
                variant="body2"
                align="justify"
                color="textSecondary"
                paragraph
                style={{ marginBottom: 0 }}
              >
                <b>Cultivos y usos</b>
                :&nbsp;
                {ReactHtmlParser(tree.cropAndUsages)}
              </Typography>
              )}
            </div>
            )}
            {(error || (!loading && !tree))
            && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height={1}
              >
                <SentimentVeryDissatisfiedIcon />
                No se encontró ningun resultado.
                <Box mt={1}>
                  <Button
                    aria-label="back"
                    component={Link}
                    to="/trees"
                  >
                    Regresar
                  </Button>
                </Box>
              </Box>
            )}
          </CardContent>
        </Box>
        {tree && tree.imgSrc
        && (
        <div>
          <Img
            className={styles['cover-image']}
            src={tree.imgSrc}
            loader={(
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={1}
                mr={2}
              >
                <CircularProgress />
              </Box>
              )}
          />
        </div>
        )}
      </Card>
    </Box>
  );
}

TreeDetail.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default TreeDetail;
