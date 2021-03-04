import React from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  const userStates = useSelector((state) => state.user, []);

  // eslint-disable-next-line no-console
  // console.log('teste', userStates);

  return (
    <div>
      <Grid continer>
        <Grid item xs={12}>
          <Grid className={classes.cardContainer} container justify="center">
            <Grid item xs={10}>
              <Grid container justify="space-between">
                <Grid item xs={3} className={classes.gridCard}>
                  <Grid container>
                    <Grid item xs={12} className={classes.cardAvatarItemAvatar}>
                      <Avatar
                        alt={userStates.user.avatar}
                        src={userStates.user.avatar}
                        className={classes.avatar}
                      />
                    </Grid>
                    <Grid item xs={12} className={classes.cardAvatarItemName}>
                      {userStates.user.name}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={8} className={classes.gridCard}>
                  <Grid container justify="center">
                    Form com troca de nome/email/avatar
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
