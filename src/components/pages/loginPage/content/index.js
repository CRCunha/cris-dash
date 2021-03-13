import { React } from 'react';
import { Grid, Button, Divider } from '@material-ui/core';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();

  return (
    <div item className={classes.loginPageContentContainer}>
      <Grid continer>
        <Grid item xs={12}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.container}
          >
            <Grid item xs={5}>
              <Grid container>
                <Grid item xs={10} className={classes.contentTitle}>
                  Sign in to Cris-Dash
                </Grid>
                <Grid item xs={10} className={classes.mediaLogin}>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <Button fullWidth className={classes.googleBtn}>
                        <img
                          src="https://img.icons8.com/bubbles/2x/google-logo.png"
                          alt="google"
                        />
                        Google
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button fullWidth className={classes.TtBtn}>
                        <img
                          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                          alt="tt"
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={10} className={classes.divider}>
                  <Divider />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
