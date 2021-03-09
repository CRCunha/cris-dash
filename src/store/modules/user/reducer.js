import produce from 'immer';

const initialState = {
  user: {
    name: JSON.parse(localStorage.getItem('loggedUser.name'))
      ? JSON.parse(localStorage.getItem('loggedUser.name'))
      : 'User Name',
    email: JSON.parse(localStorage.getItem('loggedUser.email'))
      ? JSON.parse(localStorage.getItem('loggedUser.email'))
      : 'user@email.com',
    avatar: JSON.parse(localStorage.getItem('loggedUser.avatar'))
      ? JSON.parse(localStorage.getItem('loggedUser.avatar'))
      : 'User',
    logged: JSON.parse(localStorage.getItem('loggedUser.logged'))
      ? JSON.parse(localStorage.getItem('loggedUser.logged'))
      : false,
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@app/UPDATE_USER':
      return produce(state, (draft) => {
        draft.user = {
          logged: action.userObject.logged,
          email: action.userObject.email,
          name: action.userObject.name,
          avatar: action.userObject.avatar,
        };
      });

    default:
      return state;
  }
}
