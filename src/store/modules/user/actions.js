/* USER */
export const updateUser = (userObject) => {
  return { type: '@app/UPDATE_USER', userObject };
};

/* Set User List */
export const setUsersList = (usersObject) => {
  return { type: '@app/SET_USER_LIST', usersObject };
};
