import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import styles from './tree-detail.module.scss';

const dummyTree = {
  name: 'Roble amarillo',
  location: 'Zona sur',
  age: '10 años',
  publicCode: 'a4g2jfh',
  description: 'Donec et molestie eros, eu ultrices elit. Quisque tempus'
            + 'lacinia pellentesque. Fusce vel rutrum sapien, non viverra'
            + 'arcu. Ut eu libero at augue porttitor malesuada quis sit amet'
            + 'libero.',
  imgSrc: 'https://picsum.photos/seed/picsum/200/300',
};

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
                {dummyTree.name}
              </Typography>
            </Box>
            <Box mb={0.75}>
              <Typography variant="subtitle2" color="textSecondary">
                {`${dummyTree.age} |  ${dummyTree.location}`}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              align="justify"
              color="textSecondary"
            >
              {dummyTree.description}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          className={styles['cover-image']}
          component="img"
          image={dummyTree.imgSrc}
          title={`Picture of the ${dummyTree.name} tree`}
        />
      </Card>
    </Box>
  );
}

export default TreeDetail;
