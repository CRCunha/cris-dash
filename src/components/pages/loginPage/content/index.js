import { React, useState } from 'react';
import { Grid, Button, Divider, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const { handleSubmit, errors, register } = useForm();

  const sendRequest = (formData) => {
    setLoading(formData);
    const storageUserItens = formData;

    storageUserItens.email = formData.email;
    delete storageUserItens.senha;

    setLoading(false);
  };

  const onFormError = (err) => {
    const objectErrors = {};
    Object.values(err).map((value) => {
      objectErrors[value.ref.name] = value.message;
      return value;
    });
  };

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
                <Grid item xs={10} className={classes.contentTitle}>
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        className={classes.fieldText}
                        inputRef={register({
                          required: 'Este campo é obrigatório',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                            message: 'Forneça um email válido',
                          },
                        })}
                        inputProps={{ maxLength: 150 }}
                        variant="outlined"
                        required
                        fullWidth
                        disabled={loading}
                        error={!!errors.email}
                        helperText={errors.email?.message || false}
                        name="email"
                        label="E-mail"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className={classes.field}
                        inputRef={register({
                          required: 'Este campo é obrigatório',
                        })}
                        inputProps={{ maxLength: 30 }}
                        variant="outlined"
                        required
                        fullWidth
                        disabled={loading}
                        error={!!errors.senha}
                        helperText={errors.senha?.message || false}
                        name="senha"
                        label="Senha"
                        type="password"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={10}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        type="submit"
                        disabled={false}
                        onClick={handleSubmit(sendRequest, onFormError)}
                        className={classes.googleBtn}
                      >
                        Register
                      </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.divider}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        type="submit"
                        disabled={false}
                        className={classes.googleBtn}
                        onClick={handleSubmit(sendRequest, onFormError)}
                      >
                        Login
                      </Button>
                    </Grid>
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
