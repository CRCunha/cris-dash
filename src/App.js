import React from 'react';
import { Grid, Snackbar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Routes from './components/routes';
import * as AppActions from './store/modules/app/actions';
import ModalLogin from './components/modalLogin';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const appStates = useSelector((state) => state.app, []);

  return (
    <Grid container style={{ flexWrap: 'no-wrap' }}>
      <Routes />
      <Snackbar
        open={appStates.snackbar.active}
        autoHideDuration={appStates.snackbar.duration}
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
      <ModalLogin />
    </Grid>
  );
}

export default App;
