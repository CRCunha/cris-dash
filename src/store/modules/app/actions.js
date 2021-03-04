/* SNACKBAR */

export const openSnackbar = (message, severity, duration) => {
  return { type: '@app/OPEN_SNACKBAR', message, severity, duration };
};

export const closeSnackbar = () => {
  return { type: '@app/CLOSE_SNACKBAR' };
};

/* MODAL USER */

export const openModalUser = () => {
  return { type: '@app/OPEN_MODAL_USER' };
};

export const closeModalUser = () => {
  return { type: '@app/CLOSE_MODAL_USER' };
};
