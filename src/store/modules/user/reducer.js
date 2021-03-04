import produce from 'immer';

const initialState = {
  user: {
    name: 'User Name',
    email: 'username@gmail.com',
    avatar: 'User Name',
    logged: false,
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@app/SET_USER_LOGGED':
      // eslint-disable-next-line no-console
      // console.log('action', action);
      return produce(state, (draft) => {
        draft.user = {
          ...state.user,
          email: action.userObject.email,
          logged: true,
        };
      });

    default:
      return state;
  }
}
