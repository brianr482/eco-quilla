import React from 'react';
// import './home.scss';
import { Route } from 'react-router-dom';
import { Welcome } from '../../modules/static';
import { Trees } from '../../modules/trees';


function Home() {
  return (
    <div className="wrapper">
      <Route exact path="/" component={Welcome} />
      <Route path="/trees" component={Trees} />
    </div>
  );
}

export default Home;
