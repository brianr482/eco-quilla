import {
  Box,
  Card,
  Typography,
  CardContent,
  IconButton,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import QrReader from 'react-qr-reader';
import styles from './tree-qr-reader.module.scss';

function handleScan(result) {
  // TODO: Remove log
  // eslint-disable-next-line no-console
  console.log(`Result of qr => ${result}`);
  if (result != null) {
    window.location.href = result;
  }
}

function handleError(error) {
  // eslint-disable-next-line no-console
  console.log(`QR reader error => ${error}`);
}

function TreeDetail() {
  return (
    <Box className={styles.wrapper}>
      <Card className={styles.card}>
        <Box display="flex" flexDirection="column">
          <CardContent className={styles['card-content']}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              mb={0.75}
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
              <Box flexDirection="column">
                <Typography variant="h5">
                  Lector QR
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Coloca el código QR del árbol
                </Typography>
              </Box>
            </Box>
            <QrReader
              className={styles['qr-reader']}
              delay={300}
              onError={handleError}
              onScan={handleScan}
            />
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default TreeDetail;
