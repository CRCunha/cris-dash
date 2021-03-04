import React from 'react';
import { Grid, Snackbar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Routes from './components/routes';
import * as AppActions from './store/modules/app/actions';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const appStates = useSelector((state) => state.app, []);

  return (
    <Grid container style={{ flexWrap: 'no-wrap' }}>
      <Routes />
      <Snackbar
        open={appStates.snackbar.active}
        autoHideDuration={8000}
        onClose={() => dispatch(AppActions.closeSnackbar())}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          variant="filled"
          severity={appStates.snackbar.severity}
          onClose={() => dispatch(AppActions.closeSnackbar())}
        >
          <Typography>{appStates.snackbar.message}</Typography>
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default App;
