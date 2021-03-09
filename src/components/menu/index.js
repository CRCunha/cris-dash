import { React, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as AppActions from '../../store/modules/app/actions';
import * as UsersActions from '../../store/modules/user/actions';
import useStyles from './styles';

export default function Menu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userStates = useSelector((state) => state.user, []);

  const getUsersList = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch(UsersActions.setUsersList(response.data));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className={classes.menuContainer}>
      <Grid continer>
        <Grid item xs={12} className={classes.logoMenu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Altmetric_rgb_%28crop%29.png"
            alt="logotype"
          />
        </Grid>
        <Grid item xs={12} className={classes.menuItensContainer}>
          <Grid container justify="center">
            <Link to="/" className={classes.menuLink}>
              <Grid item xs={8} className={classes.menuIten}>
                <HomeRoundedIcon className={classes.menuItenIcon} />
              </Grid>
            </Link>

            {userStates.user.logged ? (
              <Link to="/user" className={classes.menuLink}>
                <Grid item xs={8} className={classes.menuIten}>
                  <PersonRoundedIcon className={classes.menuItenIcon} />
                </Grid>
              </Link>
            ) : (
              <div className={classes.menuLink}>
                <Grid
                  className={classes.menuIten}
                  onClick={() => {
                    dispatch(AppActions.openModalLogin());
                  }}
                  item
                  xs={8}
                >
                  <PersonRoundedIcon className={classes.menuItenIcon} />
                </Grid>
              </div>
            )}

            <Link
              onClick={() => getUsersList()}
              to="/users"
              className={classes.menuLink}
            >
              <Grid Grid item xs={8} className={classes.menuIten}>
                <PeopleAltIcon className={classes.menuItenIcon} />
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
