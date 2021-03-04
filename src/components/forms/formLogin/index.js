import { React, useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as AppActions from '../../../store/modules/app/actions';
import * as UserActions from '../../../store/modules/user/actions';
import useStyles from './styles';

export default function ModalLogin() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { handleSubmit, errors, register } = useForm();

  const sendRequest = (formData) => {
    setLoading(formData);
    dispatch(AppActions.closeModalLogin());
    dispatch(UserActions.setUserLogged(formData));
    dispatch(AppActions.closeSnackbar());
    dispatch(
      AppActions.openSnackbar('Login Efetuado Com Sucesso', 'success', 8000)
    );

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
    <Grid container justify="center">
      <Grid item xs={12} className={classes.titleModal}>
        Form Login
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
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
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              fullWidth
              type="submit"
              disabled={false}
              onClick={handleSubmit(sendRequest, onFormError)}
              className={classes.buttonLogin}
            >
              Enviar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              type="submit"
              disabled={false}
              onClick={() => dispatch(AppActions.closeModalLogin())}
              className={classes.buttonLogin}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
