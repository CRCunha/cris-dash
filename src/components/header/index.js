import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import * as AppActions from '../../store/modules/app/actions';

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userStates = useSelector((state) => state.user, []);

  return (
    <div>
      <Grid continer>
        <Grid item xs={12}>
          <Grid className={classes.headerContainer} container justify="center">
            <Grid item xs={10} className={classes.buttonContainer}>
              {userStates.user.logged === false ? (
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => {
                    dispatch(AppActions.openModalLogin());
                  }}
                  className={classes.loginButton}
                >
                  Login
                </button>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
