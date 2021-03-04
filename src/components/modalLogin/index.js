import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as AppActions from '../../store/modules/app/actions';
import FormLogin from '../forms/formLogin';
import useStyles from './styles';

export default function ModalLogin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const appStates = useSelector((state) => state.app, []);

  // eslint-disable-next-line no-console
  console.log('teste', appStates);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={appStates.open}
        onClose={() => dispatch(AppActions.openModalLogin())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={appStates.open}>
          <div className={classes.paper}>
            <FormLogin />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
