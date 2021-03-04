import { React, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../header';
import Content from './content';
import * as AppActions from '../../../store/modules/app/actions';
import useStyles from './styles';

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userStates = useSelector((state) => state.user, []);

  const verifyUser = () => {
    if (!userStates.user.logged) {
      dispatch(
        AppActions.openSnackbar(
          'Você não é um usuário cadastrado',
          'warning',
          null
        )
      );
    } else {
      dispatch(AppActions.closeSnackbar());
    }
  };

  useEffect(() => {
    verifyUser();
  }, [userStates.user.logged]);

  return (
    <div className={classes.gridContainer}>
      <Grid continer>
        <Grid item xs={12}>
          <Grid continer>
            <Header />
            <Content />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
