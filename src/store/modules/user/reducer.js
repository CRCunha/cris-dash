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
      return produce(state, (draft) => {
        draft.user = {
          ...state.user,
          logged: true,
        };
      });
    default:
      return state;
  }
}
