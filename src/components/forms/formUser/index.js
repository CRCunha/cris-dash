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

  // const userStates = useSelector((state) => state.user, []);

  const sendRequest = (formData) => {
    setLoading(formData);
    dispatch(AppActions.closeModalLogin());
    dispatch(AppActions.closeSnackbar());
    dispatch(
      AppActions.openSnackbar(
        'As Informações Foram Salvas com Sucesso',
        'success',
      ),
    );

    const userObject = formData;
    userObject.logged = true;
    dispatch(UserActions.updateUser(formData));
    localStorage.setItem('loggedUser', JSON.stringify(formData));
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
    <Grid item xs={12}>
      <Grid className={classes.cardContainer} container justify="center">
        <Grid item xs={11}>
          <Grid container justify="center">
            <Grid item xs={12} className={classes.titleModal}>
              Form User
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    inputRef={register({
                      required: 'Este campo é obrigatório',
                    })}
                    inputProps={{ maxLength: 30 }}
                    // variant="Standard"
                    required
                    fullWidth
                    disabled={loading}
                    error={!!errors.nome}
                    helperText={errors.nome?.message || false}
                    name="name"
                    label="Nome"
                    type="text"
                  />
                </Grid>
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
                    // variant="Standard"
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
                    inputProps={{ maxLength: 300 }}
                    // variant="Standard"
                    required
                    fullWidth
                    disabled={loading}
                    error={!!errors.avatar}
                    helperText={errors.avatar?.message || false}
                    name="avatar"
                    label="Avatar"
                    type="text"
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-end" spacing={3}>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    type="submit"
                    disabled={false}
                    onClick={handleSubmit(sendRequest, onFormError)}
                    className={classes.buttonLogin}
                  >
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
