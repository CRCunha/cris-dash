import React from 'react';
import { Grid } from '@mui/material';
import Routes from './components/routes';
import './App.css';

function App() {
  return (
    <Grid container style={{ flexWrap: 'no-wrap' }}>
      <Routes />
    </Grid>
  );
}

export default App;
