/* SNACKBAR */

export const openSnackbar = (message, severity, duration) => {
  return { type: '@app/OPEN_SNACKBAR', message, severity, duration };
};

export const closeSnackbar = () => {
  return { type: '@app/CLOSE_SNACKBAR' };
};

/* MODAL USER */

export const openModalLogin = () => {
  return { type: '@app/OPEN_MODAL_LOGIN' };
};

export const closeModalLogin = () => {
  return { type: '@app/CLOSE_MODAL_LOGIN' };
};
