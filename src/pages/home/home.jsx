import React from 'react';
// import './home.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Welcome } from '../../modules/static';
import { Trees } from '../../modules/trees';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/trees" component={Trees} />
        <Route path="**">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
