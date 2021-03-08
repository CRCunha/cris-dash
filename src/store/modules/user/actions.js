/* SNACKBAR */

export const setUserLogged = (userObject) => {
  return { type: '@app/SET_USER_LOGGED', userObject };
};

export const updateUser = (userObject) => {
  return { type: '@app/UPDATE_USER', userObject };
};
