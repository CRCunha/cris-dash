import React from 'react';
import { Grid } from '@material-ui/core';

// Impor Components
import Menu from './components/menu';
import GridComponent from './components/grid';

function App() {
  return (
    <Grid container>
      <Menu />
      <GridComponent />
    </Grid>
  );
}

export default App;
