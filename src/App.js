import React from 'react';
import { Grid } from '@material-ui/core';
import Routes from './components/routes';
import './App.css';

function App() {
  return (
    <Grid container className="content">
      <Routes />
    </Grid>
  );
}

export default App;
